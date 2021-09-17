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
`;

function App() {
  return (
    
    <MainContainer>
      <CreateMessage />
    </MainContainer>
  );
}

export default App;
