import React, { useState } from 'react';
import styled from 'styled-components';
import PlanCard from '../components/PlanCard';
import { PricePlans } from '../PricePlans';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 2rem;
`;

function PriceCalculator() {
  const [isAnnualPrice, setAnnualPrice] = useState(false);

  return (
    <div>
      <Controls>
        <button onClick={() => setAnnualPrice(!isAnnualPrice)} type="button">
          Monthly/Annualy
        </button>
      </Controls>
      <Row>
        {PricePlans &&
          PricePlans.map((plan) => (
            <PlanCard
              key={plan['plan-id']}
              title={plan.title}
              setAnnualPrice={isAnnualPrice}
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
