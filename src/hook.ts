import { useMemo } from 'react';
import { numberFormat } from '@ricardojrmcom/number-format';

/**
 * useNumberFormat
 */
export const useNumberFormat = (num: number, format?: string) =>
  useMemo(() => numberFormat(num, format), [num, format]);
