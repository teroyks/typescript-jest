import { sampleFunction } from '../src';

describe('Integration test', () => {
  test('checks samplefunction', () => {
    expect(sampleFunction('integration')).toEqual('integrationintegration');
  });
});
