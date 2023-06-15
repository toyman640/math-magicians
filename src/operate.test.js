import operate from './logic/operate';


it('should perform addition correctly', () => {
  const result = operate('10', '5', '+');

  expect(result).toBe('15');
});

it('should perform subtraction correctly', () => {
  const result = operate('10', '5', '-');

  expect(result).toBe('5');
});

it('should perform multiplication correctly', () => {
  const result = operate('10', '5', 'x');

  expect(result).toBe('50');
});

it('should perform division correctly', () => {
  const result = operate('10', '5', '÷');

  expect(result).toBe('2');
});