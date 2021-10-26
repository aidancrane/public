import React from 'react';
import CommandLine from './CommandLine';

class Lines extends React.Component {
  state = {
    numChildren: 3
  }

  commandSubmitted (value) {
    console.log(value)
  }

  render () {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<Lines key={i} number={i} />);
    };

    return (
      <CommandLine commandSubmitted = {this.commandSubmitted} >
        {children}
      </CommandLine>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
}

export default Lines;
