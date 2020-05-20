import { StoreState } from '..';
import { createSelector } from 'reselect';
import { getTransactions } from '../transactions/selectors';

export const getJars = (state: StoreState) => state.jars;

export const getJarsWithTransactions = createSelector(
  getJars,
  getTransactions,
  (jars, transactions) =>
    jars.map((jar) => ({
      ...jar,
      transactions: transactions.filter(
        (trx) => trx.jarId === jar.id,
      ),
    })),
);