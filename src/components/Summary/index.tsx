import * as S from './styles';
import IncomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary = () => {
  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt='Entradas' />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt='Saídas' />
        </header>
        <strong>- R$5000,00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>total</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>R$500,00</strong>
      </div>
    </S.Container>
  );
};
