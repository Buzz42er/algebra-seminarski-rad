import {Component} from "react";
import React from "react";

class ChatRoom extends Component {

  render() {
    const {messages} = this.props;
    return (      
      <ul className="chat-list">
        {/* {messages.map(m => <li key={m} className="Classlocator">{this.renderMessage(m)}</li> )} */}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </ul>

      
    );
  }

  // renderMessage(message) {
  //   const {member, text} = message;
  //   const {currentMember} = this.props;
  //   const messageFromMe = member.id === currentMember.id;
  //   const className = messageFromMe ?
  //     "Messages-message currentMember" : "Messages-message";
  //   return (
  //     // <div className={className}>
  //     // <span
  //     //   className="avatar"
  //     //   style={{backgroundColor: member.clientData.color}}
  //     // />
  //     //   <div className="Message-content">
  //     //     <div className="username">
  //     //       {member.clientData.username}
  //     //     </div>
  //     //     <div className="text">{text}</div>
  //     //   </div>
  //     // </div>
  //     <div className="chat-room">
  //       <section className="chat-room-info">
  //         <div className="chat-room-icon">Icon PH</div>
  //         <div className="chat-room-name">PH name</div>
  //       </section>
  //       <section className="chat-room-breff">
  //         <p className="chat-room-last-message"> Here is the last I wrote...</p>
  //       </section>
  //     </div>

  //   );
  // }

}

export default ChatRoom