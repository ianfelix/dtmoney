import { useEffect } from 'react';
import { api } from '../../services/api';
import * as S from './styles';

export const TransactionsTable = () => {
  useEffect(() => {
    const getTransactions = async () => {
      const response = await api.get('/transactions');
      const data = await response.data;
      console.log(data);
    };
    getTransactions();
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de websites</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Pc gamer</td>
            <td className='withdraw'>- R$3.100</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
};
