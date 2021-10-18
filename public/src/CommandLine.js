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
  }


  resize() {
    var textContent = this.line.current.children[0];
    console.log(textContent.width);
    textContent.style.width = 24;
    console.log("The part above this doesn't work");
  }

  // Set the state every time there is a change to the commandline
  changeOccuring = (e) => {
    this.setState({command: e.target.value});
    // console.log(this.state);
    this.resize();
  }

  render() {
    return (<div className="CommandLine">
      <header className="CommandLineBackground"></header>
      <div className="CommandLineText">
        <div ref={this.line} className="CommandLineHeadLine">
          aidan@dark.infinityflame.co.uk ¬ /var/www/subdomains/dark ><input ref={this.command} onChange={(e) => {
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
