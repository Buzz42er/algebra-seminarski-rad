import logo from './logo.svg';
import './App.css';
import ChatRoom from './components/ChatRoom';
import RecivedMessage from './components/RecivedMessage';
import SentMessage from './components/SentMessage';
import NavListItem from './components/NavListItem';
function App() {

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
            <RecivedMessage/>
            <SentMessage/>
          </div>
          <div className='input-div'>
            {/* input area */}
            <input type="text" placeholder='Start typing...'/>
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
