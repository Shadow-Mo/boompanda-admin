// Content.js
import React from 'react';

const Content = () => {
  return (
    <div id="content" className="md:ml-24">
      <div id="dashboard" className="bg-red-400 h-screen flex justify-center">
        <h1 className="m-auto text-4xl">Dashboard</h1>
      </div>

      <div id="task" className="bg-blue-400 h-screen flex justify-center">
        <h1 className="m-auto text-4xl">Task</h1>
      </div>

      <div id="user" className="bg-yellow-400 h-screen flex justify-center">
        <h1 className="m-auto text-4xl">User</h1>
      </div>

      <div id="banner" className="bg-pink-400 h-screen flex justify-center">
        <h1 className="m-auto text-4xl">Banner</h1>
      </div>
    </div>
  );
};

export default Content;
