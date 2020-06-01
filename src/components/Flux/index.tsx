import React from 'react';

import {
  Container,
  TitleArea,
  ExplanationContainer,
  AccountButton,
} from './styles';

import goalsImg from '../../assets/phones/goals.png';
import profileImg from '../../assets/phones/profile.png';
import reserveImg from '../../assets/phones/reserve.png';

const Flux: React.FC = () => {
  return (
    <Container>
      <TitleArea>
        <span>
          Através do Ecovest, você tem um fluxo de 3 etapas
          <br />
          <strong>para se planejar financeiramente</strong>
        </span>
      </TitleArea>
      <ExplanationContainer>
        <h3>COMO ASSIM?</h3>
        <p>
          Cada etapa do fluxo representa uma etapa para se educar
          financeiramente, além disso, você pode ganhar recompensas fazendo o
          uso da plataforma, e o melhor, é totalmente gratuito!
        </p>
        <section>
          <div>
            <p>Defina seu perfil mensal de gastos</p>
            <img src={profileImg} alt="Profile screen" />
          </div>
          <div>
            <p>Utilize a reserva de emergência para momentos de urgência</p>
            <img src={goalsImg} alt="Goals screen" />
          </div>
          <div>
            <p>Defina metas e alcance seus sonhos</p>
            <img src={reserveImg} alt="Reserve screen" />
          </div>
        </section>
        <AccountButton>Abra sua conta</AccountButton>
      </ExplanationContainer>
    </Container>
  );
};

export default Flux;
