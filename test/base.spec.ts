import { sampleFunction, square } from '../src';

describe('This is a simple test', () => {
  test('Check the sampleFunction function', () => {
    expect(sampleFunction('hello')).toEqual('hellohello');
  });
});

describe('Test square from library', () => {
  test('check square', () => {
    expect(square(5)).toEqual(25);
  });
});
