import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, BlankSpace } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <img src={logoImg} alt="Ecovest" />
        <div>
          <a href="#o-que-e">O que é?</a>
          <a href="#como-funciona">Como funciona?</a>
          <button type="button">Abra sua conta</button>
        </div>
      </Container>
      <BlankSpace />
    </>
  );
};

export default Header;
