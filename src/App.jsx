import logo from './logo.svg';
import './App.css';
import ChatRoom from './components/ChatRoom';
import RecivedMessage from './components/RecivedMessage';
import SentMessage from './components/SentMessage';
import NavListItem from './components/NavListItem';
import { useEffect } from 'react';

function App() {
//   const drone = new Scaledrone('KRxTFNfTQOZwor7e');
//   const room = drone.subscribe('chat1');

//   //Listening to message
// room.on('open', error => {
//   if (error) {
//     return console.error(error);
//   }
//   // Connected to room
// });

// room.on('message', message => {
//   // Received a message sent to the room
// });

// //sending the message
// const message = {
//   hello: 'world',
//   score: 10
// };

// drone.publish({
//   room: 'room_name',
//   message: message
// });



useEffect(() => {
  const drone = new Scaledrone('KRxTFNfTQOZwor7e');
drone.on('error', error => {
  console.error('Error with connection:', error);
});
drone.on('close', event => {
  console.log('Connection closed:', event);
});

const room = drone.subscribe('my-room');
room.on('message', message => console.log('Received data:', message.data));
})

const sendMessage = () => {
  
}

  return (
    <div className="App">
      <header>
        <section className='logo-section'>
          {/* logo */}
        </section>
        <section className='nav-section'>
          {/* nav */}
          	<nav>
          	  <ul>
          	    <NavListItem/>
          	  </ul>
            </nav>
          </section>   
      </header>
      <main>
        <section className='chat-rooms-section'>
          {/* avalible chat rooms */}
          <ChatRoom/>
        </section>
        <section className='chat-section'>
          {/* current chat */}
          <div className='messages-div'>
            {/* message area */}
            <RecivedMessage />
            <SentMessage/>
          </div>
          <div className='input-div'>
            {/* input area */}
            <input type="text" placeholder='Start typing...' onClick={sendMessage}/>
            <button className='send'>SEND</button>
          </div>
        </section>
      </main>
      <footer>
        <p>Made and perfected by Jure Ereš and Royal Blood</p>
      </footer>
    </div>
  );
}

export default App;
