import { short } from '../src/index'

describe('MS', () => {
  test('return a string', () => {
    const time = short(523);
    expect(time).toBe('523 ms');
  });
});

describe('Seconds', () => {
  test('return a string with a singular second', () => {
    const time = short(1000);
    expect(time).toBe('1 second');
  });

  test('return a string pluralising seconds', () => {
    const time = short(1000 * 2);
    expect(time).toBe('2 seconds');
  });

  test('return a string with a remainder', () => {
    const time = short(1000 * 2 + 123);
    expect(time).toBe('2 seconds');
  });
});

describe('Minutes', () => {
  test('return a string with a singular minute', () => {
    const time = short(1000 * 60);
    expect(time).toBe('1 minute');
  });

  test('return a string pluralising seconds', () => {
    const time = short(1000 * 60 * 2);
    expect(time).toBe('2 minutes');
  });

  test('return a string with a remainder', () => {
    const time = short(1000 * 60 * 2 + 3211);
    expect(time).toBe('2 minutes');
  });
});

describe('Hours', () => {
  test('return a string with a singular hour', () => {
    const time = short(1000 * 60 * 60);
    expect(time).toBe('1 hour');
  });

  test('return a string pluralising hours', () => {
    const time = short(1000 * 60 * 60 * 2);
    expect(time).toBe('2 hours');
  });

  test('return a string with a remainder', () => {
    const time = short(1000 * 60 * 60 * 2 + 22342);
    expect(time).toBe('2 hours');
  });
});

describe('Days', () => {
  test('return a string with a singular hour', () => {
    const time = short(1000 * 60 * 60 * 24);
    expect(time).toBe('1 day');
  });

  test('return a string pluralising hours', () => {
    const time = short(1000 * 60 * 60 * 24 * 2);
    expect(time).toBe('2 days');
  });

  test('return a string with a remainder', () => {
    const time = short(1000 * 60 * 60 * 24 * 2 + 23422);
    expect(time).toBe('2 days');
  });
});

describe('Weeks', () => {
  test('return a string with a singular week', () => {
    const time = short(1000 * 60 * 60 * 24 * 7);
    expect(time).toBe('1 week');
  });

  test('return a string pluralising weeks', () => {
    const time = short(1000 * 60 * 60 * 24 * 7 * 2);
    expect(time).toBe('2 weeks');
  });

  test('return a string with a remainder', () => {
    const time = short(1000 * 60 * 60 * 24 * 7 * 2 + 23422);
    expect(time).toBe('2 weeks');
  });
});

describe('Months', () => {
  test('return a string with a singular month', () => {
    const time = short(1000 * 60 * 60 * 24 * 7 * 52 / 12);
    expect(time).toBe('1 month');
  });

  test('return a string pluralising months', () => {
    const time = short((1000 * 60 * 60 * 24 * 7 * 52 / 12) * 2);
    expect(time).toBe('2 months');
  });

  test('return a string with a remainder', () => {
    const time = short((1000 * 60 * 60 * 24 * 7 * 52 / 12) * 2 + 23423);
    expect(time).toBe('2 months');
  });
});

describe('Years', () => {
  test('return a string with a singular month', () => {
    const time = short(1000 * 60 * 60 * 24 * 365);
    expect(time).toBe('1 year');
  });

  test('return a string pluralising months', () => {
    const time = short(1000 * 60 * 60 * 24 * 365 * 2);
    expect(time).toBe('2 years');
  });

  test('return a string with a remainder', () => {
    const time = short(1000 * 60 * 60 * 24 * 365 * 2 + 23423);
    expect(time).toBe('2 years');
  });
});