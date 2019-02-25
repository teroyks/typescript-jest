import { sampleFunction, square } from '../src';

describe('Simple unit test', () => {
  test('checks the sampleFunction function', () => {
    expect(sampleFunction('hello')).toEqual('hellohello');
  });
});

describe('Square from library', () => {
  test('checks square of 5', () => {
    expect(square(5)).toEqual(25);
  });
});
