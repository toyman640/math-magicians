import calculate from './logic/calculate';

describe('calculate', () => {
  it('should reset the values when buttonName is "AC"', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update the next value correctly when buttonName is a number', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '7');

    expect(result).toEqual({
      total: '10',
      next: '57',
      operation: '+',
    });
  });

  it('should update the next value correctly when buttonName is "0"', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '0');

    expect(result).toEqual({
      total: '10',
      next: '50',
      operation: '+',
    });
  });

  it('should update the next value correctly when buttonName is "."', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');

    expect(result).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });
  });

  it('should calculate the result correctly when buttonName is "="', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');

    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should update the next value correctly when buttonName is "+/-"', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+/-');

    expect(result).toEqual({
      total: null,
      next: '-5',
      operation: null,
    });
  });
});
