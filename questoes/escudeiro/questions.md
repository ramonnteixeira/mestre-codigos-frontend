1. Explique com suas palavras a diferença entre a utilização de var, const e let?

    A principal diferença é que var independente de onde é instanciado, vira uma variável global, enquanto o const e let respeitam o escopo do bloco de código.
    Além disso, var e let podem sofrer alteração, enquanto const não.


2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions?

    [x] Funções normais não guardam escopo

    [] Funções normais guardam escopo

    [] Arrow function são mais rápidas

    [] Arrow function podem ser instanciadas

    [] Arrow function não guardam escopo

3. Qual o valor da variavél name após a execução da função?

    [] John

    [] Luke

    [] James

    [x] Walter

4. Qual o retorno da seguinte função

    [x] The event 04/02/2019 will take place on Event Test
    
    [] The event undefined will take place on undefined
    
    [] Uncaught TypeError
    
    [] The event null will take place on null

5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?

    Pegar um elemento único através do Id especificado.

    ``` 
    document.getElementById('id')
    ```

    Pegar uma lista de Elementos com uma classe específica.

    ``` 
    document.getElementsByClassName('classe')
    ```

    Pegar uma lista de Elementos com uma tag específica.

    ``` 
    document.getElementsByTagName('div')
    ```

    Pegar uma lista de Elementos com um namespace específica.

    ``` 
    document.getElementsByTagNameNS('http://custom.namespace.com', 'div')
    ```

    Todos os métodos acima foram utilizando o document, mas podem ser chamados dentro de outros elementos, por exemplo:

    ```
    const myComponent = document.getElementById('my-component');
    const divs = myComponent.getElementsByTagName('div');
    ```

6. Como inserir um evento em determinado elemento?

    Utilizando o comando addEventListener(evento, listener). Exemplo:

    ```
    const onClick = ()=>alert('teste');
    const elemento = document.getElementById('filmes');
    elemento.addEventListener('click', onClick);
    ```

7. Como remover um evento em determinado elemento?

    Utilizando o comando removeEventListener(evento, listener). Exemplo:

    ```
    const onClick = ()=>alert('teste');
    const elemento = document.getElementById('filmes');
    
    // adiciona o evento
    elemento.addEventListener('click', onClick);

    elemento.removeEventListener('click', onClick);

    ```

8. Descreva com suas palavras o que é event bubbling?

    É uma forma de desempilhar eventos, onde o evento é iniciado pelo nó filho e vai subindo até o componente root.


9. Descreva qual a diferença nos métodos de declaração de objetos?

    const obj = {}: Chamado de inicializador de objeto, constroi um objeto utilizando um mapa de chave/valor. Ele é muito prático, porém exige a interpretação do objeto a cada chamada de atributo, para validar se o mesmo existe.

    const object = new Object(): Utilizado por funções construtoras, definindo previamente os atributos na função construtora e utilizando o contexto this.

    const object = Object.create(): Permite definir a tipagem com inicializador de objeto e então criar o objeto, com propriedades default.

10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?

    A API fetch é a forma mais atual de acessar recursos de forma assíncrona, o mesmo não aceita cookies do servidor e facilita o uso de CORS. O Fetch retorna uma Promise e permite encadear a resposta.

    O XMLHttpRequest permite utilizar outros verbos http, e o seu retorno é feito por chamadas de callback.

    O mais aconselhado é utilizar a API Fetch, por ser mais atual e ter uma sintaxe mais simplificada.

11. O que são Promises ? Como podemos declarar uma promise em javascript ?

    Promises é uma forma de trabalhar de forma assíncrona, pois o javascript trabalha com apenas 1 thread.

    Para criar uma Promise, pode-se utilizar o construtor new Promise((resolve, reject) => {}), onde resolve e reject são callbacks para terminar a promise de forma positiva ou negativa, quem efetua a chamada vai chamar da seguinte forma: myPromise.then(myCallbackOk).catch(myCallbackError)

    Uma segunda forma de criar é utilizando a declaração async nas funções, ex: async function myFunction()

12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?

    Para iterar de forma simplificada, pegando os itens em um escopo fechado.
    
    array.forEach(item => console.log(item))

    Intera os índices do array utilizando for/in
    
    for(index in array) {
        console.log(array[index]);
    }

    Intera sobre os itens utilizando for/of, permite deixar o item interado em escopo fechado ou aberto, dependendo da declaração da variável.
    
    for(const item of array) {

    }

13. Quando utilizar map, reduce ou filter ?

    Map é utilizado quando se quer transformar a lista atual em outro tipo de lista

    O reduce é utilizado para transformar o array em um objeto único, como por exemplo a soma de valores, ou mesmo concatenar uma lista de texto em uma única string.

    O filter é utilizado para filtrar itens do array.

14. Qual o método do Array é mais indicado para remover elementos ?

    Para remover itens pelo índice, é mais aconselhado o uso do slice, pois mantém a lista imutável, criando uma lista nova.

    Outra forma de remover itens com a lista imutável, é utilizando o método filter, ele permite remover diversos itens utilizando uma condição.

15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;

    * charAt(x) retorna o caracter na posição X.
    
    * split(token) transforma string em um array, fazendo a quebra de item pelo token passado.
    
    * startWith(text) retorna um booleano informando se a string inicia com o texto informado.
    
    * endWith(text) retorna um booleano informando se a string termina com o texto informado.

16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage

```
const user = {nome: "Fulano", email: 'fulano@beltrano.com'};

sessionStorage.setItem('user', JSON.stringify(user));

console.log(JSON.parse(sessionStorage.user));
```

17. Qual a melhor forma para definir um cookie utilizando javascript ?

A melhor forma é definindo junto uma data de expiração, para evitar falhas de segurança.

```
function setCookie(name, value, days) {
    const dayTimeMilis = 24 * 60 * 60 * 1000;
    const date = new Date();
    const expireDate = new Date(date.getTime() + (days * dayTimeMilis));
    const expires = `expires=${expireDate.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}
```

18. Quais os tipos de Loops existentes em javascript?

    * for - executa um bloco de código N vezes, aplicando 3 declarações, a primeira para declarar uma variável, a segunda com a condição de parada e a terceira, geralmente utilizada para incremento/decremento da variavel.
    
    * for / in - Percorre as propriedades de um objeto.

    * for / of - Percorre os valores de um array
    
    * while - executa um bloco de código enquanto a condição passada é verdadeira
    
    * do / while - executa primeiro o bloco de código, e no final verifica se continua executando o mesmo bloco.

19. Descreva com suas palavras o que é hoisting ?

    Hoisting é o comportamento do javascript em jogar as declarações para antes da execução, como é o caso do VAR e function, no caso tentar acessar essas funções/variaveis antes mesmo de o terem declarados. ex:

    ```
    init();
    console.log(filtro);

    function init() { 
        var filtro = { nome: '' };
    }
    ```

20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict";

    [x] window
    
    [] global
    
    [] undefined
    
    [] null

21. Quando eu posso utilizar o "Use-strict" no meu código ?

    [x] No ínicio do meu código

    [] No inicio do block if

    [] No inicio de um loop

    [x] no inicio de uma função
