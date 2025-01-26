import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
export const useAuthStore = create((set)=>{
    return {
        authUser : null,
        isSigningUp : false,
        isLoggingIng : false,
        isUpdatingProfile:false,

        isCheckingAuth : true,
        checkAuth : async()=>{
            try {
                const res = await axiosInstance.get("/auth/check");
                set({authUser:res.data});
            } catch (error) {
                console.log("Error in checkAuth ", error.message);
                set({authUser:null});
            }
            finally{
                set({isCheckingAuth:false})
            }
        },
        signup: async(data)=>{
         try {
            set({ isSigningUp: true });
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully");
            get().connectSocket();
          } catch (error) {
            toast.error(error.response.data.message);
          } finally {
            set({ isSigningUp: false });
          }
        },
        
        logout: async () => {
            try {
              await axiosInstance.post("/auth/logout");
              set({ authUser: null });
              toast.success("Logged out successfully");
              get().disconnectSocket();
            } catch (error) {
              toast.error(error.response.data.message);
            }
          },
    }
})