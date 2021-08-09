import ErrorRepository from '../ErrorRepository';

const errors = [
  [1001, 'The name must be a string!'],
  [1002, 'The name must be between 2 and 10 characters!'],
  [1003, 'The type must be selected from the list of suggested types!'],
  [1004, 'Такой персонаж уже eсть в команде'],
];

// eslint-disable-next-line no-undef
test('Метод translate должен вернуть значение по ключу', () => {
  const Test = new ErrorRepository();
  Test.errStorage.set(1000, 'test error');
  // eslint-disable-next-line no-undef
  expect(Test.translate(1000)).toBe('test error');
});

// eslint-disable-next-line no-undef
test('Метод translate должен вернуть Unknown error, если ключа нет', () => {
  const Test = new ErrorRepository();
  Test.errStorage.set(1000, 'test error');
  // eslint-disable-next-line no-undef
  expect(Test.translate(2000)).toBe('Unknown error');
});

// eslint-disable-next-line no-undef
test('Переданный в инстанс массив ошибок должен сохраниться в хранилище', () => {
  const Test = new ErrorRepository();
  Test.errStorage = new Map(errors);
  // eslint-disable-next-line no-undef
  expect(Test.errStorage.size).toBe(4);
});

// eslint-disable-next-line no-undef
test('Передали массив ошибок и 1 ошибку отдельно, должны сохраниться все (5 шт)', () => {
  const Test = new ErrorRepository();
  Test.errStorage = new Map(errors);
  Test.errStorage.set(1000, 'Test error');
  // eslint-disable-next-line no-undef
  expect(Test.errStorage.size).toBe(5);
});

// eslint-disable-next-line no-undef
test('Передали массив ошибок и один дубль отдельно, дубль должен перезаписаться', () => {
  const Test = new ErrorRepository();
  Test.errStorage = new Map(errors);
  Test.errStorage.set(1001, 'Errror test');
  // eslint-disable-next-line no-undef
  expect(Test.errStorage.size).toBe(4);
});
