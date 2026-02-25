const { describe, it, expect } = require('vitest');
const { sum } = require('../src/main');

describe('sum()', () => {
  it('adds numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });
});

// electron specific tests

vi.mock('electron', () => ({
  app: { getVersion: () => '1.0.0' },
}));
