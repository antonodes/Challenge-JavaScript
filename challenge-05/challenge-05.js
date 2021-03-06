/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(args) {
  return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(array)[0];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arrayValues, selectNumber) {
  return arrayValues[selectNumber];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var type = [
  1,
  "Antônio Flávio",
  true,
  [1, 2, 3, 4, 5],
  { peso: 10, altura: 1.5 }
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(type, 1);
myFunction(type, 2);
myFunction(type, 3);
myFunction(type, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {
  var allBookName = {
    cleanCode: {
      quantidadePaginas: 150,
      autor: "Antônio Flávio",
      editora: "Brasil Livros"
    },
    designPattern: {
      quantidadePaginas: 100,
      autor: "Antônio Flávio",
      editora: "Brasil Livros"
    },
    cleanArchiectura: {
      quantidadePaginas: 200,
      autor: "Antônio Flávio",
      editora: "Brasil Livros"
    }
  };
  if (allBookName[bookName] === undefined) {
    return allBookName;
  }

  return allBookName[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(undefined);

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var text =
  " o livro " +
  nameBook +
  " tem " +
  book(cleanCode).quantidadePaginas +
  " páginas ";
return text;

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var text =
  " o autor do livro " + nameBook + " é " + book(cleanCode).autor + " . ";
return text;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var text =
  " O livro " +
  nameBook +
  " foi publicado pela editora " +
  book(cleanCode).editora +
  " . ";
return text;
