/**
 * * npm install express mongoose dotenv jsonwebtoken bcryptjs cookie-parser cloudinary socket.io
 *  
 * How to use .env file
 * in server file add : const dotenv = require('dotenv').config()
 * then use like:  process.env.VARIABLE_NAME
 * 
 * * Hash password using bcryptjs
 *   const bcrypt = require('bcryptjs')
 *   const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);

     while comparing password use:
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(400).send('Invalid password');
        else return res.status(200).send('Logged in successfully');

* *  JWT token
 * * JWT youtube video: https://www.youtube.com/watch?v=kMErso06vHo&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=25
 *   creating a token for a user
 *   const jwt = require('jsonwebtoken');
 *   const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET , {expiresIn: '1h'});
 *                             payload,          secret key              , options
 *   now send this token to the user
 *   res.cookie('jwt', token, {httpOnly: true, maxAge: 3600000}); // 1 hour
 *               name, value,  options
 *   now in the client side, store this token in localstorage or cookie
 *   
 *   now validation the user
 *   when a user will login they will give there credention , if valid credential is given 
 *   then cookie will be generated and send to the client from server
 *   Now every time user will request in server , it will come along with cookie 
 *   we will decode the cookie and will validate the payload for varification and will grant access
 *   step 1: parse the cookie
 *   // server.js
 *   const cookieParser = require("cookie-parser");
 *   app.use(cookieParser());
 *   
 *  
 *   * CLOUDINARY SETUP FOR IMAGES
 *   
 * 
 *   * HANDLE REFRESH USING /check ROUTE
*/