import { renderHook, act } from '@testing-library/react-hooks';
import { useNumberFormat } from '.';

describe('test example hook', () => {
  it('should init as "1,337"', () => {
    const { result } = renderHook(() => useNumberFormat(1337));
    expect(result.current).toBe('1,337');
  });
});
