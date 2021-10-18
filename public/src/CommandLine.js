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
  }


  //https://stackoverflow.com/a/58705306
   getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font || getComputedStyle(document.body).font;
    return context.measureText(text).width;
  }

  setCaretPosition() {
    var textContent = this.line.current.children[0];
    var newInputLength = this.getTextWidth(textContent.value);
    console.log(newInputLength); // <-- String length

    //console.log(this.command.current.offsetWidth); // <- Width of input box

    this.setState({commandLengthInEM: newInputLength});
    //textContent.style.width = 24;
    //console.log("The part above this doesn't work");
  }

  // Set the state every time there is a change to the commandline
  changeOccuring = (e) => {
    this.setState({command: e.target.value});
    // console.log(this.state);
    e.target.width = null;
    this.setCaretPosition();
  }

  render() {
    return (<div className="CommandLine">
      <header className="CommandLineBackground"></header>
      <div className="CommandLineText">
        <div ref={this.line} className="CommandLineHeadLine">
          aidan@dark.infinityflame.co.uk ¬ /var/www/subdomains/dark ><input autoFocus={true} ref={this.command} style={{ width: this.state.commandLengthInEM, maxWidth: "95vw" }} onChange={(e) => {
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
