import { createGlobalStyle, keyframes } from 'styled-components';

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

.react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius:0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;

    &:hover  {
      filter: brightness(0.8);
    }
  }

`;

export const flipCardBottom = keyframes`   
  0% {
    transform: rotateX(0);
   
  }
  
  100% {
    transform: rotateX(-380deg);
  }

`;
