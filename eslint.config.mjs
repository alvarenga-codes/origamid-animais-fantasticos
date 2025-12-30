export default [
  {
    rules: {
      // Apontar erro no console
      // 'no-console': 'error',
      //if com espaço após o comando
      // indent: ['error', 2],
      // 'keyword-spacing': 'error',
      //Erro em código com linhas em branco
      "no-multiple-empty-lines": "error",
      //Linha no final do js
      "eol-last": ["error", "always"],
      //ponto e virgula no final
      semi: ["error", "always"],
      //não ter espaçamento extra (que não seja identação)
      "no-trailing-spaces": "error",
      //forçar o += para evitar redundância
      "operator-assignment": "error",
      //não permite criar funções dentro do if
      "no-inner-declarations": [
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ],
    },
  },
];
