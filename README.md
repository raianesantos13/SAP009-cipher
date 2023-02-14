# Cifra de César

## Índice

* [1. Contexto](#1-Contexto)
* [2. O que é a cifra de cesar?](#2-O-que-e-a-cifra-de-cesar?)
* [3. Como utilizar o site](#3-Como-utilizar-o-site)
* [4. Caracteristicas a desenvolver](#5-Caracteristicas-a-desenvolver)
* [5. Ferramentas utilizadas:](#5-considerações-técnicas)
* [6. Pagina web](#6-pagina-web)
* [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Para considerar o feedback do projeto](#9-para-considerar-o-feedback-do-projeto)

***

## 1. Contexto

O site foi criado para ajudar algumas equipes de segurança 
(policia, hospital, empresas no geral) com o intuito de proteger
arquivos totalmente confidenciais e evitar que os mesmos sejam hackeados. 
O site aplica criptografia e descriptografia em documentação, 
como ajudar a proteger pessoas em situação de proteção
a testemunha ou documentos de finanças de hospitais e empresas no geral.
O acesso é permitido apenas em computadores de pessoas autorizadas.

## 2. O que é a cifra de cesar?

Cifra de César, também conhecida como cifra de troca, código de César ou troca de César, 
é uma das mais simples e conhecidas técnicas de criptografia.
 É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, 
que se apresenta no alfabeto abaixo dela um número fixo de vezes. Por exemplo, com uma troca de três posições,
 A seria substituído por D, B se tornaria E, e assim por diante.
 O nome do método é em homenagem a Júlio César, que o usou para se comunicar com os seus generais.

 ## fonte: Wikipedia

## 3. Como utilizar o site 

* Primeiro coloque o numero de deslocamento que deseja.
* Adicione o nome do documento e logo abaixo vai aparecer criptografado.
* Para descriptografar, basta colocar o nome criptografado na caixa ao lado e
 logo abaixo vai aparecer descriptografado

## 4. Caracteristicas a desenvolver
A interface do site ainda esta bem simples, mas melhorias estao chegando com as proximas atualizaçoes.

È possivel utilizar letra maiuscula e minuscula, porem numeros ainda nao.

## Observação

Este é o meu primeiro projeto do Bootcamp da laboratoria

## 5. Ferramentas utilizadas 

* HTML 5;
* CSS 3;
* JavaScript;
* Alura;
* Visual Studio Code;
* Git e GitHub.

## 6. Pagina web

O site esta disponivel no seguinte url:  https://raianesantos13.github.io/SAP009-cipher/


















### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/02-html5/02-semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de dados primitivos**

  <details><summary>Links</summary><p>

  * [Valores Primitivos - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadeias de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/pt/topics/javascript/06-strings)
  * [String — Cadeia de caracteres - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/02-loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

### Controle de Versões (Git e GitHub)

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

## 8. Guias, dicas e leituras complementares

### Primeiros passos

1. Se assegure de ter um bom :pencil: editor de texto, algo
   como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
2. Para executar os comandos você precisará de um :shell: UNIX Shell, que é um
   programa que interpreta linhas de comando (command-line interpreter) e também
   deve ter o git instalado. Se você usa um sistema operacional "UNIX-like",
   como GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
   provavelmente o `git` também). Se você usa Windows você pode usar o [Git
   bash](https://git-scm.com/download/win), embora seja recomendado que você
   teste :penguin: GNU/Linux.
3. Faça seu próprio :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório. Seus
   _mentores_ compartilharão com você um _link_ para um repositório privado e te
   darão acesso a este repositório.
4. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   o _fork_ para seu computador (cópia local).
5. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
6. Se tudo foi bem, você deve conseguir executar os :traffic_light: testes
   unitários com o comando `npm test`.
7. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
8. Let's Code! :rocket:

Este [video](https://drive.google.com/file/d/1CM6ZfpGfJMF6A8IcXoK5cFBBq-CY8oBR/view?usp=sharing)
da Paloma também pode te ajudar nos seus primeiros passos ;)

### Recursos extras

A seguir um vídeo do Daniel que te ajudará a entender a fórmula matemática usada
pela Cifra de César e algumas coisas mais que deve saber para resolver o seu
projeto. Escute com atenção e siga seus conselhos ! :)

[![Dicas Cifra de
César](https://img.youtube.com/vi/utiLWBXmNQU/0.jpg)](https://www.youtube.com/watch?v=utiLWBXmNQU)

Desenvolvimento Front-end:

* [Aprenda mais sobre
  `charCodeAt()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [Aprenda mais sobre
  `String.fromCharCode()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
* [Aprenda mais sobre
  `ASCII`](https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm)
* [Documentação do NPM](https://docs.npmjs.com/)
* Saiba mais sobre [objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)
  e [como definir métodos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#definindo_m%C3%A9todos##)

## 9. Para considerar o feedback do projeto

Em resumo, os critérios mínimos de aceitação do projeto para considerar o
Project Feedback:

* [ ] Possui uma interface que permite ao usuário criptografar e
  descriptografar.
* [ ] O projeto será entregue incluindo testes unitários dos métodos `cipher`
  (`encode` e `decode`).
* [ ] O projeto será entregue livre de _erros_ de `eslint` (_warnings_ são ok).
* [ ] O código do seu projeto será entregue no GitHub.
* [ ] A interface será "implantada" usando o GitHub Pages.
* [ ] O README contém uma definição de produto.
