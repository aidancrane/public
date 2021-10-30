import React from 'react';
import CommandLine from './CommandLine';
import LineOutput from './LineOutput';

class Lines extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commandCount: 3
    };

    this.processCommand = this.processCommand.bind(this);
  }

 processCommand = (value) => {
    this.setState({commandCount: this.state.commandCount + 1});
    console.log(this.state.commandCount);
  }

  commandSubmitted = (value) => {
    this.processCommand(value);
  }

  render () {


    const outputs = [
      {
        text: "Saab"
      },
      {
        text: "Merc"
      },
      {
        text: "BMW"
      }
  ];

    return (
      <div className="CommandLine">
      <LineOutput lines = {outputs} />
      <CommandLine commandSubmitted = {this.commandSubmitted} />
      </div>

    );
  }

}

export default Lines;
