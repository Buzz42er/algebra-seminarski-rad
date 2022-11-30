import {Component} from "react";
import React from "react";

class Messages extends Component {
  
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => <li key={m} className="classLocator">{this.renderMessage(m)}</li> )}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </ul>
    );
  }

  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <div className={className}>
      <span
        className="avatar"
        style={{backgroundColor: member.clientData.color}}
      />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    );
  }
}

export default Messages;
