import "../friends.css";

function Friends() {
  return (
    <div className="chat-container">
      <div className="sidebar">
        <h2>Friends</h2>
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
        </ul>
      </div>
      <div className="chat-box">
        <div className="chat-header">Chat with John Doe</div>
        <div className="chat-messages">
          <div className="message received">
            <p class="message-text">Hey, how's it going?</p>
          </div>
          <div className="message sent">
            <p class="message-text">All is good brother</p>
          </div>
          <div className="message sent">
            <p class="message-text">All is good brother</p>
          </div>
          <div className="message received">
            <p class="message-text">Hey, how's it going?</p>
          </div>
          <div className="message received">
            <p class="message-text">Hey, how's it going?</p>
          </div>
          <div className="message received">
            <p class="message-text">Hey, how's it going?</p>
          </div>
          <div className="message received">
            <p class="message-text">Hey, how's it going?</p>
          </div>
          <div className="message received">
            <p class="message-text">Hey, how's it going?</p>
          </div>
          <div className="message received">
            <p class="message-text">Hey, how's it going?</p>
          </div>
          <div className="message received">
            <p class="message-text">Hey, how's it going?</p>
          </div>
          
        </div>
        
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button class="chat-buts">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Friends;
