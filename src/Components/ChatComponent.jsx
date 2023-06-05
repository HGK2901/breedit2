import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar'

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({ sender: '', text: '' });

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/messages', newMessage);
      setNewMessage({ sender: '', text: '' });
      fetchMessages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>  
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl mb-4">Messenger</h2>
        <div className="border border-gray-300 rounded-lg p-4 h-64 overflow-y-scroll">
          {messages.map((message) => (
            <div key={message._id} className="mb-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{message.sender}</p>
                  <div className="bg-gray-100 text-gray-800 p-2 rounded-md">
                    {message.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="flex mt-4">
            <input
              type="text"
              name="sender"
              value={newMessage.sender}
              onChange={handleInputChange}
              className="flex-grow rounded-l-md border border-gray-300 p-2"
              placeholder="Your name"
            />
            <input
              type="text"
              name="text"
              value={newMessage.text}
              onChange={handleInputChange}
              className="flex-grow rounded-r-md border border-gray-300 p-2 ml-2"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 ml-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default ChatComponent;
