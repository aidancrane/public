import React from 'react';

class LineOutput extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  messagesEndRef = React.createRef();

  componentDidMount () {
    this.scrollToBottom();
  }
  componentDidUpdate () {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {

    const outputs = this.props.lines;
    const listItems = outputs.map((output) =>
    <div key={output.index}>
      {output.text}
    </div>);

    return (
       <div>
      <div className="outputs">
      {listItems}
      <div ref={this.messagesEndRef}/>
      </div>

      </div>
    );

  };

}

export default LineOutput;
