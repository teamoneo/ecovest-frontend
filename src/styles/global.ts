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
`;

export default globalStyle;
