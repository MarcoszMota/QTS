const { somar, mensagemBoasVindas } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('compara o numero', () => {
  expect(numeroMaior(2, 3));
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});