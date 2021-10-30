import React from 'react';

class LineOutput extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {



    const outputs = this.props.lines;
    const listItems = outputs.map((output) =>
    <div key={output.text.toString()}>
      {output.text}
    </div>);

    return (
      <div>{listItems}</div>
    );

  };

}

export default LineOutput;
