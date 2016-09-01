import React from 'react';

export default class MessageList extends React.Component {
  render() {
    let renderMessage  = (message) => <Message message={message.txt} />
    return (
      <ul className="messageList">
        {this.props.messages.map(renderMessage)}
      </ul>
    );
  }
}
