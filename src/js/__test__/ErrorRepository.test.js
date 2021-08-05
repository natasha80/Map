import ErrorRepository from '../ErrorRepository';

const errors = [
  [1001, 'The name must be a string!'],
  [1002, 'The name must be between 2 and 10 characters!'],
  [1003, 'The type must be selected from the list of suggested types!'],
  [1004, 'Такой персонаж уже eсть в команде'],
];

test('Метод translate должен вернуть значение по ключу', () => {
  const Test = new ErrorRepository();
  Test.errStorage.set(1000, 'test error');
  expect(Test.translate(1000)).toBe('test error');
});

test('Метод translate должен вернуть Unknown error, если ключа нет', () => {
  const Test = new ErrorRepository();
  Test.errStorage.set(1000, 'test error');
  expect(Test.translate(2000)).toBe('Unknown error');
});

test('Переданный в инстанс массив ошибок должен сохраниться в хранилище', () => {
  const Test = new ErrorRepository();
  Test.errStorage = new Map(errors);
  expect(Test.errStorage.size).toBe(4);
});

test('Передали массив ошибок и 1 ошибку отдельно, должны сохраниться все (5 шт)', () => {
  const Test = new ErrorRepository();
  Test.errStorage = new Map(errors);
  Test.errStorage.set(1000, 'Test error');
  expect(Test.errStorage.size).toBe(5);
});

test('Передали массив ошибок и один дубль отдельно, дубль должен перезаписаться', () => {
  const Test = new ErrorRepository();
  Test.errStorage = new Map(errors);
  Test.errStorage.set(1001, 'Errror test');
  expect(Test.errStorage.size).toBe(4);
});