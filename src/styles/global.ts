import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --background: #E5E5E5;
  --red: #E62E4D;
  --green: #33CC95;
  --blue: #5429CC;

  --blue-light: #6933FF;

  --text-title: #363f5f;
  --text-body: #969cb3;
  --shape: #fff;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {	
  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 720px) {
    font-size: 87.5%
  }
}

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea,button {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
