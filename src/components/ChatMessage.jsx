import UserProfileImage from '../assets/user.png'
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import RobotProfileImage from '../assets/robot.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {

  return (
    <div className={
      sender === "user" 
        ? "chat-message-user" 
        : "chat-message-robot"
    }>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
        {message === "LOADING_SPINNER" 
          ? (<img src={LoadingSpinnerImage} className="chat-message-spinner" alt="loading" />) 
          : (message)
        }
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}