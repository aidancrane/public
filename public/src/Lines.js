import React from 'react';
import CommandLine from './CommandLine';

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
    console.log(value);
  }

  render () {
    const children = [];

    for (var i = 0; i < this.state.commandCount; i += 1) {
      //children.push(<Lines key={i} number={i} />);
      children.push("Jello");
    };

    return (
      <CommandLine commandSubmitted = {this.commandSubmitted} >
        {children}
      </CommandLine>
    );
  }

}

export default Lines;
