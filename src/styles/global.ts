import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: Ubuntu;
  }

  @media (max-width: 700px) {
    font-size: 60%;
  }

  @media (max-width: 415px) {
    font-size: 40%
  }
`;

export default globalStyle;
