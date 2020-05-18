import { useState } from 'react';
import { Jar, Transaction } from '../types';

export const useJar = () => {
  const [data, setData] = useState<Jar>({
    id: 1,
    balance: 1000,
    transactions: [],
  });

  const addFunds = (amount: number) => {
    const nextTransaction: Transaction = {
      id: performance.now(),
      amount,
      date: new Date().toISOString(),
      title: 'Wpłata środków',
    };
    setData((data) => ({
      ...data,
      transactions: [nextTransaction, ...data.transactions],
      balance: data.balance + amount,
    }));
  };

  const removeFunds = (amount: number) => {
    const nextTransaction: Transaction = {
      id: performance.now(),
      amount,
      date: new Date().toISOString(),
      title: 'Wypłata środków',
    };
    setData((data) => ({
      ...data,
      transactions: [nextTransaction, ...data.transactions],
      balance: data.balance - amount,
    }));
  };

  return { addFunds, removeFunds, data };
};