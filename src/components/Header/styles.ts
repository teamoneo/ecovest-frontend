import styled from 'styled-components';
import { shade } from 'polished';

export const Wrap = styled.div`
  display: fixed;
  width: 100%;
  height: 100%;
  background-color: #7159c1;
  margin-bottom: 95px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  padding: 18px 0;
  width: 100%;
  background-color: #fff;
  * {
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: #4d4d4f;

    transition: 0.2s;

    &:hover {
      color: ${shade('0.2', '#4d4d4f')};
    }
  }

  a + * {
    margin-left: 30px;
  }

  button {
    background-color: #f58220;
    color: #fff;
    padding: 10px 20px;
    border: 0;
    border-radius: 50px;

    transition: 0.2s;

    &:hover {
      color: ${shade('0.2', '#fff')};
      background-color: ${shade('0.2', '#f58220')};
    }
  }

  @media (max-width: 700px) {
    a {
      display: none;
    }
  }

  @media (max-width: 415px) {
    justify-content: center;

    button {
      display: none;
    }
  }
`;
