import { useState } from 'react'
import Chatbot from './Chatbot.jsx'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    // Add a loading message first
    setChatMessages([
      ...newChatMessages,
      {
        message: "LOADING_SPINNER",
        sender: "robot",
        id: "loading-temp" // temporary ID
      }
    ]);

    // Simulate a delay, then replace with actual response
    setTimeout(() => {
      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID()
        }
      ]);
    }, 1000); // 1 second delay

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}