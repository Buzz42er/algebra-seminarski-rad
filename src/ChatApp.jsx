import './App.css';
import { Component } from 'react';
import MessageBubbles from './components/MessageBubbles';
import InputField from './components/InputField';

function randomName() {
  const adjectives = [
    "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
    "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
    "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
    "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long",
    "late", "lingering", "bold", "little", "morning", "muddy", "old", "red",
    "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering",
    "withered", "wild", "black", "young", "holy", "solitary", "fragrant",
    "aged", "snowy", "proud", "floral", "restless", "divine", "polished",
    "ancient", "purple", "lively", "nameless"
  ];
  const nouns = [
    "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
    "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
    "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
    "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
    "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
    "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
    "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
    "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog",
    "smoke", "star"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}


class ChatApp extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }
  // constructor is like a main function in class, that does most of hevy lifting
  constructor() {
    // it contains super, that is a methode of sorts that can help us call functions or props 
    super();
    // here is our api call where we are connecting, with a KEY, Scaledrone API and our app
    this.drone = new window.Scaledrone("KRxTFNfTQOZwor7e", {
      // declaring member so that we can connect and fill state, and it's props with data that we'll pull form scaledrone
      data: this.state.member
    });
    // connecting to scaledrone
    this.drone.on('open', error => {
      if (error) {
        // if call fails write error to console
        return console.error(error);
      }
      // when on, filling user info in state prop memeber
      const member = {...this.state.member};
      // id-ing the memeber, with id provided by scaledrone
      member.id = this.drone.clientId;
      // setting state of member, like a variable, but with a methode, will render it later by calling it
      this.setState({member});
    });
    // declaring room as methode for subscribing to chatroom
    const room = this.drone.subscribe("observable-room");
    // connecting to room
    room.on('data', (data, member) => {
      // filling message to object state's prop messages
      const messages = this.state.messages;
      // messages is object that we can set data to, and package it so that we know which user sent it
      messages.push({member, text: data});
      // declering messages so that we can call it later and render it
      this.setState({messages});
    });
  }
  
render(){
  return (
    <div className="App">
      {/* header-------------------------------------------------------------------------------------- */}
      <header>
        <section className='logo-section'>
          {/* logo */}
          <img src="2i.svg" alt="" width={40} height={40} className="logo"/>
        </section>
        <section className='nav-section'>
          {/* nav */}
          	<nav>
          	  <ul>
          	    {/* <NavListItem/> */}
          	  </ul>
            </nav>
          </section>   
      </header>
      {/* main ----------------------------------------------------------------------------------------*/}
      <main>
        <section className='chat-rooms-section'>
          {/* avalible chat rooms */}
        </section>
        <section className='chat-section'>
          {/* current chat */}
          <div className='messages-div'>
            {/* message area */}
            <MessageBubbles
              messages={this.state.messages}
              currentMember={this.state.member}
            />
          </div>
          <div className='input-div'>
            {/* input area */}
            <InputField
              onSendMessage={this.onSendMessage}
            />
          </div>
        </section>
      </main>
      {/* footer --------------------------------------------------------------------------------------------*/}
      <footer>
        <p>Made by Jure Ereš</p>
      </footer>
    </div>
  );
}

// mount message to room, or publish as methode is called
onSendMessage = (message) => {
  this.drone.publish({
    room: "observable-room",
    message
  });
}

}

export default ChatApp;
