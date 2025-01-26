/**
 * *npm i react-router-dom react-hot-toast
 * 
 * *what is the purpose of this BrowserRouer
 * The BrowserRouter is a component from the react-router-dom library that enables client-side routing in a React application. It uses the HTML5 History API to keep the UI in sync with the URL, allowing you to navigate between different views or pages without reloading the entire page.
 * 
 * *npm i axios zustand
 * 
 * *npm i lucide-react : for loader component
 * 
 * *Learned about Navigate component
 * *<Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/login" />}/>
 * 
 * *import {Toaster} from "react-hot-toast";
 * this is use to show pop up
 * *toast.success("Logged in successfully");
 * *toast.error("Logged in not successfully");
 * *learing
    from server when we send a status code error and a json like this 
    return res.satus(400).send({message:"User not created"});
    it will come to the react inside this 
    catch (error) {
            toast.error(error.response.data.message);
    }

    **import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
    this is for logos

 */