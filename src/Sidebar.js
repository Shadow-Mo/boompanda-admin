// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="h-screen fixed">
      <div className="fixed h-screen top-0 left-0 bg-slate-800 w-50 ">
        <img className='top-2 m-6' src="/Logo.png" alt="not found" />
        <nav role="navigation" className="pl-4 pt-5 mt-4">
          <div className="relative overflow-hidden">

            <ul className="nav-list space-y-8" id="nav-list">
              <li className="nav-item text-xl active p-2 hover:rounded-lg text-white hover:bg-slate-900">
              
                <Link to='/dashboard' className="flex gap-5">
                <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" /></svg>
                
                  Dashboard
                </Link>
              </li>
              <li className="nav-item text-xl p-2 hover:rounded-lg text-white hover:bg-slate-900">
                <Link to='/task' className="flex gap-5">
                <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
                  Task
                </Link>
              </li>
              <li className="nav-item text-xl p-2 hover:rounded-lg text-white hover:bg-slate-900">
                <Link to='/user' className="flex gap-5">
                <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="9" cy="7" r="4" />  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />  <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  User
                </Link>
              </li>
              <li className="nav-item text-xl p-2 mr-2 hover:rounded-lg text-white hover:bg-slate-900">
                <Link to='/banner' className="flex gap-5">
                <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="7" height="7" />  <rect x="14" y="3" width="7" height="7" />  <rect x="14" y="14" width="7" height="7" />  <rect x="3" y="14" width="7" height="7" /></svg>
                  Banner
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
