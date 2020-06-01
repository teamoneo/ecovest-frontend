import React from 'react';

import { Container } from './styles';

import calendarImg from '../../assets/calendar.svg';

const ProductDescription: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Chegou o Ecovest!</h1>
        <h2>A solução completa para sua educação financeira</h2>
        <button type="submit">Abra sua conta</button>
      </div>
      <img src={calendarImg} alt="Calendar" />
    </Container>
  );
};

export default ProductDescription;
