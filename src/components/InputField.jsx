import {Component} from "react";
import React from "react";

class InputField extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
    
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus= {true}
          />
          <button>
            <span className="material-symbols-outlined">
              send
            </span>
          </button>
        </form>
      </div>
    );
  }
}

export default InputField;