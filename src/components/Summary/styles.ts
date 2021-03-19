import styled from 'styled-components';
import { flipCardBottom } from '../../styles/global';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    animation: ${flipCardBottom} 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;

    &:nth-child(2) {
      animation: ${flipCardBottom} 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        0.1s both;
    }
    &:nth-child(3) {
      animation: ${flipCardBottom} 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        0.2s both;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #ffffff;
    }
  }
`;
