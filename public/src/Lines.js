import React from 'react';
import CommandLine from './CommandLine';
import LineOutput from './LineOutput';

class Lines extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      outputs : [
        {
          text: "Saab"
        },
        {
          text: "Merc"
        },
        {
          text: "BMW"
        },
        {
          text: "BM1W"
        }
      ]
    };

    this.commandLine = React.createRef();

    this.processCommand = this.processCommand.bind(this);
    this.focusCommandLine = this.focusCommandLine.bind(this);
  }



 processCommand = (value) => {
   var joined = this.state.outputs.concat({
             text: " " + value
           });
    this.setState({outputs: joined});
  }

  commandSubmitted = (value) => {
    this.processCommand(value);
  }

  // When a user clicks anywhere on the screen.
  focusCommandLine() {
    // Check if a user is selecting text on the screen.
    var selection = window.getSelection();

    if (selection.toString().length === 0) {
      // User is not selecting text, they just clicked.
       this.commandLine.current.setFocus();
    }
  }

  render () {



    return (
      <div className="CommandLine" onClick={this.focusCommandLine}>
      <LineOutput lines = {this.state.outputs} />
      <CommandLine commandSubmitted = {this.commandSubmitted} ref={this.commandLine}/>
      </div>

    );
  }

}

export default Lines;
