import {Component} from "react";
import React from "react";
import logo from  "../2i.svg";


class MessageBubbles extends Component {
  
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
        {messages.map((m, i) => <li key={i} className="classLocator">{this.renderMessage(m)}</li> )}
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
      >
        <img src={logo} alt="logo" />
      </span>
        <div className="Message-content">
          <div className="username" style={{color: member.clientData.color}}>
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    );
  }
}

export default MessageBubbles;
