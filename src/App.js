import React from 'react';
import styled from 'styled-components';
import PriceCalculator from './components/PriceCalculator';

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 5rem 0;
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
        <PriceCalculator />
      </Container>
    </div>
  );
}

export default App;
