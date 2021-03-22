import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../TransactionsContext';
import * as S from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = (props: NewTransactionModalProps) => {
  const { isOpen, onRequestClose } = props;

  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'>
      <button
        type='submit'
        onClick={onRequestClose}
        className='react-modal-close'>
        <img src={closeImg} alt='Fechar modal' />
      </button>

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type='text'
          placeholder='Título'
          name='titulo'
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          type='number'
          placeholder='Valor'
          name='valor'
          onChange={(event) => setAmount(Number(event.target.value))}
          value={amount}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'>
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'>
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          type='text'
          placeholder='Categoria'
          name='categoria'
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />

        <button type='submit'>Cadastrar</button>
      </S.Container>
    </Modal>
  );
};
