import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;


function App() {
  return (
    <div className="App">
      <Container>
        <Title>Pricing Tiers</Title>
        
      </Container>
    </div>
  );
}

export default App;
