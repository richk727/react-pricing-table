import React from 'react';
import styled from 'styled-components';
import PriceCalculator from './components/PriceCalculator';

const Container = styled.div`
  width: 500px;
  max-width: 98%;
  margin: 0 auto;
  padding: 5rem 0;
  @media (min-width: 1100px) {
    width: 1080px;
  }
`;

const Title = styled.h1`
  color: var(--primary-accent);
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Title>Cake Pricing Tiers 🎂</Title>
        <PriceCalculator />
      </Container>
    </div>
  );
}

export default App;
