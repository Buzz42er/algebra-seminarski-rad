import './App.css';
import { Component } from 'react';
import Messages from './components/Messages';
import Input from './components/Input';

// random name generator
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
  // gets first array and by math.floor chooses random number from that array's length by multiplying it with it
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  // does the same thing but with second array
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  // gets choosen element from first array and adds it to choosen element from second array
  return adjective + noun;
}

// random color generator
function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}



class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("KRxTFNfTQOZwor7e", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
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
            <Messages
              messages={this.state.messages}
              currentMember={this.state.member}
            />
          </div>
          <div className='input-div'>
            {/* input area */}
            <Input
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

onSendMessage = (message) => {
  this.drone.publish({
    room: "observable-room",
    message
  });
}

}

export default App;
