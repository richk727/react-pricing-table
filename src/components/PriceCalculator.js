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

const ToggleControl = styled.button`
  position: relative;
  display: inline-flex;
  padding: 0;
  background: #eee;
  border: none;
  border-radius: 50px;
  box-shadow: inset 1px 2px 5px rgb(53 73 76 / 0.05);
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc(50% - 0.5rem);
    margin: 0.25rem;
    background: var(--primary-accent);
    border-radius: 50px;
    transition: all 225ms ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &.active {
    &:before {
      //transform: translateX(50%);
      left: 50%;
    }
    .annualy {
      color: #fff;
    }
    .monthly {
      color: var(--heading-color);
    }
  }

  span {
    position: relative;
    flex: 0 0 50%;
    padding: 1rem 2rem;
    text-align: center;
    font-weight: 500;
    transition: all 225ms ease-in-out;
  }
  .annualy {
    color: var(--heading-color);
  }
  .monthly {
    color: #fff;
  }
`;

function PriceCalculator() {
  const [isAnnualPrice, setAnnualPrice] = useState(true);

  return (
    <div>
      <Controls>
        <ToggleControl
          className={isAnnualPrice ? 'active' : ''}
          onClick={() => setAnnualPrice(!isAnnualPrice)}
          type="button"
        >
          <span className="monthly">Monthly</span>
          <span className="annualy">Annualy</span>
        </ToggleControl>
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
