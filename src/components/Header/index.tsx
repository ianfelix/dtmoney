import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import * as S from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = (props: HeaderProps) => {
  const { onOpenNewTransactionModal } = props;

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt='dt money' />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  );
};
