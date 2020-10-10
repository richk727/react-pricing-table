import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as CheckIcon } from '../assets/checkmark-sharp.svg';
import { ReactComponent as AddIcon } from '../assets/add-sharp.svg';

const Card = styled.div`
  display: flex;
  flex-direction: column;
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
  flex: 1 0 auto;
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
`;

const FeatureItem = styled.li`
  position: relative;
  padding: 0.5rem 0 0.5rem 2rem;

  svg {
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 1.25rem;
    color: var(--primary-accent);
  }
`;

const PurchaseButton = styled.button`
  width: 100%;
  padding: 1rem 3rem;
  color: #fff;
  background: var(--primary-accent);
  border: none;
  cursor: pointer;
  transition: all 150ms ease-out;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgb(63 45 86 / 0.15), 0 4px 4px rgb(63 45 86 / 0.25);
  }
`;

const PriceCard = (props) => {
  const {
    title,
    setAnnualPrice,
    monthlyPrice,
    annualMonthlyPrice,
    features,
    buttonText,
  } = props;
  function displayIcon(value) {
    if (value === 'tick') {
      return <CheckIcon />;
    }
    return <AddIcon />;
  }
  const price = setAnnualPrice ? annualMonthlyPrice : monthlyPrice;
  const priceSubtext = setAnnualPrice
    ? 'Per Month, billed annualy'
    : 'Per Month, billed monthly';
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <Price>
        <span>£</span>
        {price}
      </Price>
      <PricePerTerms>{priceSubtext}</PricePerTerms>
      <CardContent>
        <FeatureList>
          {features &&
            features.map((feature, key) => (
              <FeatureItem key={key}>
                {displayIcon(feature['feature-icon'])} {feature['feature-text']}
              </FeatureItem>
            ))}
        </FeatureList>
      </CardContent>
      <div>
        <PurchaseButton type="button">{buttonText}</PurchaseButton>
      </div>
    </Card>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string,
  setAnnualPrice: PropTypes.string,
  monthlyPrice: PropTypes.string,
  annualMonthlyPrice: PropTypes.string,
  features: PropTypes.array,
  buttonText: PropTypes.string,
};
export default PriceCard;
