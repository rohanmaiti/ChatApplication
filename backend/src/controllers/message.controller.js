const Message = require("../models/message.model");

// GET USERS FOR SIDE BAR
async function getUsersForSidebar(req,res){
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);

      } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
      }
}


// GET MESSAGES for parlicular userid 
async function getMessages(req,res){
    try{
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
        $or:[
            {senderId:myId , receiverId:userToChatId},
            {senderId:userToChatId, receiverId:myId}
        ]
    })
    res.status(200).json(messages);
    }
    catch(err){
        console.log("Error in getting Messages", err.message);
        res.status(500).json({message:"Internal server error"});
    }

}


async function sendMessages(req,res){
    try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      // Upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        text,
        image: imageUrl,
      });
      await newMessage.save();
      
      // IMPLEMENT SOCKET IO HERE
      
      res.status(201).json(newMessage)
        
    } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getUsersForSidebar,
    getMessages,
    sendMessages
}