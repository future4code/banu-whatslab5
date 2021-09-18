import React from "react";
import styled from "styled-components";
import CreateMessage from "./components/CreateMessage";




const MainContainer = styled.div`
  background-color: black;
  background-image: url(https://img.elo7.com.br/product/zoom/1A2348E/painel-ursinhos-carinhosos-frete-gratis-temas-de-festa-infantil.jpg);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 100vh;
    width: 100vw;
    position: center;
    box-sizing: border-box;
}
`;

function App() {
  return (
    
    <MainContainer>
      <CreateMessage />
    </MainContainer>
  );
}

export default App;
