This is README for Algebra seminarski rad.
Here I will record my process and this will be documentation for the chat App that is Seminarski rad.

- you need to have installed -
  _ node.js
  _ some text editor
  _ git(not necessary but I would recommend)
  _ git bash

- 1.  setup -
  - find some place where you want to hold your project
  - create folder that will be called something in context of "chat app"
  - get in vsc, or text editor of your choosing
  - find and open folder that you have created
  - go to terminal, or node console if you prefer so
  - navigate to your folder(if you are in vsc it will do that automatically if you have opened that folder that you created)
  - type in **_ npx react-create-app . _** (just stuff between **__**(stars), also for every other time you see this kind of writing)
    - a bit of context: - npx is one of the commands of NPM(Node Package Manager) - create-react-app is command that you call when you want to call and create everything you need to have react in that folder - dot or spot on the end is important, that lets your npx know that it needs to create everything inside that folder that you are in
      \*\*\* if you are not in that folder that you want to create your react app, instead of dot, you should type down either just a name to create new folder inside the one you already are or make a path to folder you wanna create your app in
  - wait for your app to be installed
  - go to src
  - create new folder called **_components_**
  - inside of **_components_** create new **.jsx** file and name it **_Input.jsx_**
  - and, in same folder, same type of file, create **_Messages.jsx_**

- 2. App.jsx - __first part__ - 
  - import './App.css' should already be there, and function app also
  - delete function app and create class called ChatApp:
    - **_ class ChatApp extends Component _**
  - for now, in it just add render method that will render what we write and return inside that will call that method so that it actually renders what we wrote:
    - **_ render () { "write RETURN inside here" } _**       and       **_ return ( "write inside here" ) _**
  - now, everything with HTML goes in that ***return***
  - create HTML structure that will contain your chat app data when you call it from api, and when you input it
  - First, container that will hold it all, <div> with className of App
    <!-- everything will be indented like in html so if it is a child it will be indented -->
    - we need ***header*** that will hold things that can navigate us through the site
    - ***main***, that will have our main content
    - ***footer***, that has in this case only copyright claim, but can hold, navigation links, email input 
    for something like newsletter and more
    <!-- those 3 don't need classes in this case because there is just one for every page, in larger project, sometimes people use classes to make different mains for different pages, but in most cases main is just container that you fill and does not need a class(or ID) because it is unique, with classes you mostly declaser some attributes that that class will have and add defined class to existing element to change it like in bootstrap or talewind. There classes are used like tools, and you can add one on top of the other to edit your code without ever needing to go to css file, because everything is already predeclared there. -->

      <!-- I will declare all of my divs and sections inside classes so when I write down chat-rooms-section you know that you need to make section that has that className -->
      - in ***header***, for this case, we'll just put _logo-section_
        - in _logo-section_, needs to be an img element, that will have source of our logo file and ClassName of _logo_, height and width of **40**
      - and empty ***nav*** section, that in this case will not be needed yet but we added it for later upgrades
      - in ***main***, we'll need _chat-rooms-section_ that will for now be empty, for future updates
      - and _chat-section_ 
       - that will have _messages-div_
       - and _input-div_
      - in ***footer***, there will be just a paragraph, within which will be our copyright claim
  - **_ export default InputField; _** - at the end when you close return, render, and class, to export it when it's imported somewhere else(in ChatApp in this case)

- 3. input.jsx - first part - 
  - go to InputField file and create class InputField:
    - **_ class InputField extends Component {} _**
  - inside it:
    - we need state like in ChatApp but with just one prop, text, that has empty string value ("")
    - next we need couple of methods:
      - **_onChange()_**
       - with,   **_ this.setState({text: e.target.value}); _** to grab the value from input
      - **_onSubmit()_**
        - and in submit, 
          **_ e.preventDefault(); _** - to stop from refreshing 
          **_ this.setState({text: ""}); _** - to get Text prop
          **_ this.props.onSendMessage(this.state.text); _** - to get it to method in app that will catch that message
        
      <!-- that act as out eventListeners -->
      - and a render() method just like in ChatApp, with return() to call what we wrote inside
        - container that holds everything <div className="Input">
          - form,  <form onSubmit={e => this.onSubmit(e)}>, with onSubmit attribute that is a function that calls onSubmit method
            - input, <input
            **_onChange={e => this.onChange(e)}_** - calls onChange method
            **_value={this.state.text}_** - catches value and puts it into state.text prop
            **_type="text"_** - declares type of input
            **_placeholder="Enter your message and press ENTER"_** - whats there before you start typing
            **_autoFocus= {true}_** - by default you can start writing as soon as you come into app
            />
            - button, <button> - by default submits the form
                        <span className="material-symbols-outlined"> - creates an icon for send
                          send
                        </span>
                      </button>
            - **_ export default InputField; _** - at the end when you close return, render, and class, to export it when it's imported somewhere else(in ChatApp in this case)

- 3. MessageBubbles.jsx - first part - 
  - go to MessageBubbles file and create class MessageBubbles:
    - **_ class MessageBubbles extends Component {} _**
    - inside it: 
      - to scroll to the end of the messages every time new message comes:
        **_scrollToBottom = () => { _** - function for scrolling automatically to bottom on every new message
        **_this.messagesEnd.scrollIntoView({ behavior: "smooth" }); _** - get messagesEnd, scroll to it, smoothly
        **_} _**
        **_componentDidMount() { _** - calls scrollToBottom when component is rendered
        **_  this.scrollToBottom(); _**
        **_} _**
        
        **_componentDidUpdate() { _** - calls scrollToBottom when component is changed
        **_  this.scrollToBottom(); _**
        **_} _**
      - render method, and return, HTML structure for messages: 
        **_render() { _** - opens render method
        **_  const {messages} = this.props; _** - declares messages, that will later be used as prop to pass data trough
        **_  return ( _** - opens return  that will return HTML inside to render method and it will render that on the page
        **_    <ul className="Messages-list"> _** - open unordered list for messages
        <!-- messages.map, maps all messages in array and for every one of them puts them in there own list item(<li>) -->
        **_      {messages.map((m,i) => <li key={i} className="classLocator">{this.renderMessage(m)}</li> )} _**
        **_      <div style={{ float:"left", clear: "both" }} _** - div that will host li
        **_           ref={(el) => { this.messagesEnd = el; }}> _** - referencing element to witch scrollToView needs to scroll to
        **_      </div> _**
        **_    </ul> _**
        **_  ); _**
        **_} _**
      - generating messages for messages array:
          **_renderMessage(message) { _** - method that will take text from input and send them to group, and render them properly
          **_  const {member, text} = message; _** - text from input
          **_  const {currentMember} = this.props; _** - member that has this perticular input
          **_  const messageFromMe = member.id === currentMember.id; _** - checks if the member who sent message is the member that sees it
          **_  const className = messageFromMe ? _** - if so
          **_    "Messages-message currentMember" : "Messages-message"; _** - add currentMember to classes, and if not just add other class
          **_  return ( _** - return to render
          **_    <div className={className}> _** - div that contains either one or the other class combination
          **_    <span _** - icon of the user with class avatar, and that icon randomized color specific to that member 
          **_      className="avatar" _** 
          **_      style={{backgroundColor: member.clientData.color}} _**
          **_    /> _**
          **_      <div className="Message-content"> _** - container that holds username and text
          **_        <div className="username"> _**  - container for user
          **_          {member.clientData.username} _** - username of text owner
          **_        </div> _**
          **_        <div className="text">{text}</div> _** - text from input
          **_      </div> _**
          **_    </div> _**
          **_  ); _**
          **_}  _**

- 4. ChatApp.jsx - second part -
  - let's connect it all
  - arrays for username:
    <!-- // random name generator array for data input -->
    **_function randomName() { _**
    **_  const adjectives = [ _**
    **_    "autumn", "hidden", "bitter",... _**
    **_  ]; _**
    **_  const nouns = [ _**
    **_    "waterfall", "river", "breeze", ... _**
    **_  ]; _**
    **_}; _**
  - random number generators, that choose color and username:
    <!-- // gets first array and by math.floor chooses random number from that array's length by multiplying it with it -->
    **_const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]; _**
    <!-- // does the same thing but with second array -->
    **_const noun = nouns[Math.floor(Math.random() * nouns.length)]; _**
    <!-- // gets chosen element from first array and adds it to chosen element from second array -->
    **_return adjective + noun; _**

    <!-- // random color generator -->
    **_function randomColor() { _**
    **_  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16); _**
    **_} _**
  - state for ChatApp:
    <!-- // declare state, state is like an object that you can call inside you class -->
    **_state = { _**
      <!-- // 2 parameters, messages, by member, and member who sends them -->
      **_messages: [], _**
      **_member: { _**
        <!-- // member is also an object, and has to parameters, username of that member, and color, for icon -->
        <!-- // both username and color are randomized from functions above that are called in here -->
        **_username: randomName(), _**
        **_color: randomColor(), _**
    **_  } _**
    **_} _**
  - constructor of ChatApp:
      <!-- // constructor is like a main function in class, that does most of heavy lifting -->
      **_constructor() { _**
        <!-- // it contains super, that is a method of sorts that can help us call functions or props  -->
      - super method of constructor:
          **_super(); _**
          <!-- // here is our api call where we are connecting, with a KEY, Scaledrone API and our app -->
          **_this.drone = new window.Scaledrone("KRxTFNfTQOZwor7e", { _**
            <!-- // declaring member so that we can connect and fill state, and it's props with data that we'll pull form scaledrone -->
            **_data: this.state.member _**
          **_}); _**
          <!-- // connecting to scaledrone -->
          **_this.drone.on('open', error => { _**
            **_if (error) { _**
              <!-- // if call fails write error to console -->
              **_return console.error(error); _**
            **_} _**
            <!-- // when on, filling user info in state prop member -->
            **_const member = {...this.state.member}; _**
            <!-- // id-ing the member, with id provided by scaledrone -->
            **_member.id = this.drone.clientId; _**
            <!-- // setting state of member, like a variable, but with a method, will render it later by calling it -->
            **_this.setState({member}); _**
          **_}); _**
        <!-- // declaring room as method for subscribing to chatroom -->
        **_const room = this.drone.subscribe("observable-room"); _**
          <!-- // connecting to room -->
          **_room.on('data', (data, member) => { _**
            <!-- // filling message to object state's prop messages -->
            **_const messages = this.state.messages; _**
            <!-- // messages is object that we can set data to, and package it so that we know which user sent it -->
            **_messages.push({member, text: data}); _**
            <!-- // declaring messages so that we can call it later and render it -->
            **_this.setState({messages}); _**
          **_}); _**
      **_} _**
    - mounting message to room:
    <!-- // mount message to room, or publish as method is called -->
    **_onSendMessage = (message) => { _**
    **_  this.drone.publish({ _**
    **_    room: "observable-room", _**
    **_    message _**
    **_  }); _**
    **_} _**
  

 ----------- CSS --------------
 I would be as bold and say that CSS is readable enough so that it doesn't need it own description, but in a nutshell:
  - this app was from CSS point structured mostly as a grid when I needed large pieces to fold into place and for smaller elements that contain just text or similar I used flex
  - general differences between this two is that with grid you can create shapes and divisions that are not equal to each other but still follow some general roles, and with flex thing in a way just fall into place by themselves
  
  - pros of grid are that is very modular and can be used preferably for big layouts that need a lot to show at once, you can display it very elegantly and it doesn't look overcrowded
  - cons are that to do it well you need a bit larger learning curve and for some specific use cases you need to write a lot more css for same effect as some other options 

  - pros for flex is that is relatively easy to learn, especially if you work in chrome where you can click on flex icon in inspector and click through options that flex offers, in that way you can pick up on different ways flex works very quickly, and for smaller layouts, where you just need everything to be tighty, I would say it's, most of the time, perfect
  - cons, for bigger layouts it uses, either too many divisions to get the same effect as grid or to much space if you use it as "intended"

  - there, of course are other smaller things like position that can be very useful but it's a bit old now, and i didn't really got to measurements, but in short, there are two ways to declare some length, with fixed increments, like px or cm, mm, or inch-es, and there are modular ones, like em, rem, %, vh, vw and so on, there are some benefits to both, but most of the time modular ones are better mostly because you don't know on whose device will it be and how large is screen on it.
  - there are also media screens, and so on that we use to show one layout on one screen size and other on another, mostly, but you can do more with them



