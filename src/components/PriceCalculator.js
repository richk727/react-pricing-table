import React from 'react';
import styled from 'styled-components';
import PlanCard from '../components/PlanCard';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 2rem;
`;

function PriceCalculator() {
  return (
    <div>
      <Controls>Monthly/Annualy</Controls>
      <Row>
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </Row>
    </div>
  );
}

export default PriceCalculator;
