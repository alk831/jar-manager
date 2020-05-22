import { useSelector, useDispatch } from 'react-redux';
import { getJarsWithTransactions } from '../store/modules/jars/selectors';
import type { JarFundsTransfer } from '../store/actions';
import {
  jarFundsAdded,
  jarFundsRemoved,
  jarCreated,
  jarFundsTransferred,
  jarDefaultUpdated,
} from '../store/actions';
import { Currency } from '../types';

export const useJarStore = () => {
  const dispatch = useDispatch();
  const jars = useSelector(getJarsWithTransactions);

  const fundsAdd = (jarId: number, funds: number) => {
    dispatch(jarFundsAdded(jarId, funds));
  };

  const fundsRemove = (jarId: number, funds: number) => {
    dispatch(jarFundsRemoved(jarId, funds));
  };

  const createJar = (currency: Currency, balance: number) => {
    dispatch(jarCreated({ currency, balance }));
  };

  const fundsTransfer = (payload: JarFundsTransfer) => {
    dispatch(jarFundsTransferred(payload));
  };

  const updateDefault = (jarId: number) => {
    dispatch(jarDefaultUpdated(jarId));
  };

  return {
    jars,
    createJar,
    fundsTransfer,
    fundsAdd,
    fundsRemove,
    updateDefault,
  };
};
