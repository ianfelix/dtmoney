import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInputProps) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export const TransactionsProvider = (props: TransactionProviderProps) => {
  const { children } = props;

  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    const getTransactions = async () => {
      const response = await api.get('/transactions');
      const data = await response.data.transactions;
      setTransactions(data);
    };
    getTransactions();
  }, []);

  const createTransaction = (transaction: TransactionInputProps) => {
    api.post('/transactions', transaction);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
