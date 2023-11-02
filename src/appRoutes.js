import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './components/dashboard';
import Task from './components/task';
import User from './components/user';
import Banner from './components/banner';

function AppRoutes() {
    return (
        <BrowserRouter>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/5 md:w-1/4 lg:w-1/6 xl:w-1/5 bg-slate-800">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="w-4/5 md:w-3/4 lg:w-5/6 xl:w-4/5">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/task" element={<Task />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/banner" element={<Banner />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes;
