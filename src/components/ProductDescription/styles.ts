import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f47920;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 80px 15px;

  div {
    h1 {
      font-size: 75px;
      margin-bottom: 25px;
    }

    h2 {
      font-size: 35px;
      margin-bottom: 40px;
    }

    h1,
    h2 {
      max-width: 485px;
      color: #fff;
      font-weight: 500;
    }

    button {
      background-color: #fff;
      color: #f47920;
      border: 0;
      border-radius: 5px;
      padding: 15px 20px;
      font-size: 20px;
    }
  }

  img {
    width: 40%;
    @media (max-width: 800px) {
      display: none;
    }

    @media (max-width: 415px) {
      display: none;
    }
  }
`;
