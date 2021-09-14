import React from "react";
import styled from "styled-components";



const MessagesContainer = styled.div`
  background-color: white;
  width: 45vw;
  height: 90vh;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 5px;
  border: 1px solid lightgray;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
  display: flex;
}

`;

const Message = styled.p`
  background-color: #075E54;
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid lightgray;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
  display: flex;
}

`;
const MyMessage = styled.p`
  align-self: flex-end;
  background-color: #075E54;
  margin: 3px;
  padding: 12px 15px;
  text-align: right;
  width: 50%;
  border-radius: 5px;
  border: 1px solid lightgray;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
  display: flex;
}

`;

//Area para mudar posição quando escrever "Eu" em usuário. 
class MessagesList extends React.Component {
  render() {
    return (
      <MessagesContainer>
        {this.props.messages &&
          this.props.messages.map((message, index) => {
            if (message.userValue.toLowerCase() === "eu") {
              return (
                <MyMessage
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{message.userValue}: </strong>
                  {message.messageValue}
                </MyMessage>
              );
            } else {
              return (
                <Message
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{message.userValue}: </strong>
                  {message.messageValue}
                </Message>
              );
            }
          })}
      </MessagesContainer>
    );
  }
}
export default MessagesList;
