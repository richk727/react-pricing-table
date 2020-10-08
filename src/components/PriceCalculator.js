import React from 'react';
import styled from 'styled-components';
import PlanCard from '../components/PlanCard';
import { PricePlans } from '../PricePlans';

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
        {PricePlans &&
          PricePlans.map((plan) => (
            <PlanCard
              key={plan['plan-id']}
              title={plan.title}
              monthlyPrice={plan['monthly-price']}
              annualMonthlyPrice={plan['annual-monthly-price']}
              features={plan.features}
              buttonText={plan['button-text']}
            />
          ))}
      </Row>
    </div>
  );
}

export default PriceCalculator;
