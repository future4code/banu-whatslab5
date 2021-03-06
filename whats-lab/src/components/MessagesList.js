import React from "react";
import styled from "styled-components";



const MessagesContainer = styled.div`
  background-color: blueviolet;
  background-image:url(https://i.pinimg.com/564x/78/86/87/7886875c90bc86e0d154c697623c73e9.jpg);
  width: 35vw;
  height: 90vh;
  margin-top: 19px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 10px;
  border: 1px solid lightgray;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 100vw;
    height: 100vh;
    margin-top: 0px;
    margin-bottom: 0px;
  }

`;

const Message = styled.p`
  background-color: lightskyblue;
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid lightgray;



`;
const MyMessage = styled.p`
  align-self: flex-end;
  background-color: lightsteelblue;
  margin: 3px;
  padding: 12px 15px;
  text-align: right;
  width: 50%;
  border-radius: 5px;
  border: 1px solid lightgray;


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
