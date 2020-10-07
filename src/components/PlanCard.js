import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 2rem;
  text-align: center;
  background: var(--card-background);
  border-radius: 0.25rem;
  box-shadow: 0 15px 35px rgb(34, 32, 56, 0.05), 0 5px 10px rgb(34, 32, 56, 0.1);
`;

const CardHeader = styled.div`
  margin: 0 0 1rem;
  padding: 0 0 1rem;
  color: var(--primary-accent);
  font-size: 1.25rem;
  font-weight: 500;
  border-bottom: 1px solid #eee;
`;

const Price = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding: 1rem 0;
  color: var(--heading-color);
  font-size: 5rem;
  font-weight: 700;

  span {
    position: absolute;
    display: inline-block;
    top: 2rem;
    left: -1.5rem;
    font-size: 2rem;
  }
`;

const PricePerTerms = styled.div`
  margin-top: -1rem;
  color: #888;
  font-size: 0.875rem;
  font-weight: 300;
`;

const CardContent = styled.div`
  postion: relative;
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0.25rem 0;
  }
`;

const PurchaseButton = styled.button`
  width: 100%;
  padding: 1rem 3rem;
  color: #fff;
  background: var(--primary-accent);
  border: none;
  cursor: pointer;
`;

export default function PriceCalculator() {
  return (
    <Card>
      <CardHeader>Plan name</CardHeader>
      <Price>
        <span>£</span>999
      </Price>
      <PricePerTerms>Per Month</PricePerTerms>
      <CardContent>
        <FeatureList>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </FeatureList>
      </CardContent>
      <div>
        <PurchaseButton type="button">Buy Now</PurchaseButton>
      </div>
    </Card>
  );
}
