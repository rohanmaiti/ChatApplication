import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import {Navbar} from "./components/Navbar"
import {HomePage} from "./pages/HomePage";
import {SignupPage} from "./pages/SignupPage";
import {LoginPage} from "./pages/LoginPage";
import {SettingsPage} from "./pages/SettingsPage";
import {ProfilePage} from "./pages/ProfilePage";

import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import {Loader} from "lucide-react";

import { useThemeStore } from "./store/useThemeStore";

import {Toaster} from "react-hot-toast";

function App() {
  const {authUser , checkAuth , isCheckingAuth} = useAuthStore()
  const { theme } = useThemeStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme}>
     <Navbar />
     <Routes>
        <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/login" />}/>
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/" />}/>
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/"/>}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/profile" element={ authUser ? <ProfilePage /> : <Navigate to="/login" />}/>
     </Routes>
     <Toaster />
    </div>
  )
}

export default App
