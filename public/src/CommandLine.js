import React from 'react';
import './CommandLine.css';

// function resize() {
//   hide.textContent = txt.value;
//   txt.style.width = hide.offsetWidth + "px";
// }

class CommandLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      command: ''
    };
    this.line = React.createRef();
    this.command = React.createRef();

    // input box carat location monitor.
    this.commandLengthInEM = 0;

    this.focusCommandLine = this.focusCommandLine.bind(this);
  }

  // https://stackoverflow.com/a/58705306
  // Get width of user text in px.
  getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font || getComputedStyle(document.body).font;
    return context.measureText(text).width;
  }

  // Set the position of the blinking cursor to a place just past
  // the user inputted text.
  // Essentially,
  // Set the length of the input box to match the exact length of the input.
  setCaretPosition() {
    // Get the first child of the line which is just some text.
    var textContent = this.line.current.children[0];
    // Get the width of the text.
    var newInputLength = this.getTextWidth(textContent.value);

    //console.log(newInputLength);  <-- String length

    //console.log(this.command.current.offsetWidth);  <- Width of input box

    // Set the length of the input box to match the exact length of the input.
    this.setState({commandLengthInEM: newInputLength});
  }

  // Set the state every time there is a change to the commandline
  changeOccuring = (e) => {
    this.setState({command: e.target.value});
    // console.log(this.state);
    e.target.width = null;
    this.setCaretPosition();
  }

  // When a user clicks anywhere on the screen.
  focusCommandLine() {
    // Check if a user is selecting text on the screen.
    var selection = window.getSelection();

    if (selection.toString().length === 0) {
      // User is not selecting text, they just clicked.
      this.command.current.focus();
    }
  }

  render() {
    return (<div className="CommandLine" onClick={this.focusCommandLine}>
      <header className="CommandLineBackground"></header>
      <div className="CommandLineText">
        <div ref={this.line} className="CommandLineHeadLine">
          aidan@dark.infinityflame.co.uk ¬ /var/www/subdomains/dark >
          <input autoFocus={true} ref={this.command} style={{
              width: this.state.commandLengthInEM,
              maxWidth: "95vw"
            }} onChange={(e) => {
              this.changeOccuring(e)
            }} className="CommandLineInput" spellCheck="false" type="text"/>
          <span className="blink">█</span>
        </div>
      </div>
    </div>
    );
  }
}

export default CommandLine;
