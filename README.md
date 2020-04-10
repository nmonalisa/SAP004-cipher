## Índice
* [0. Link do projeto](#0.link-do-projeto)
* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Ferramentas utilizadas](#4-ferramentas-utilizadas)
* [5. Scripts e Arquivos](#5-scripts-e-arquivos)
* [6. Instalação](#6-instalação)
* [7. Autora](#7-autora)
* [8. Agradecimentos](#8-agradecimentos)


## 0.Link do projeto
Clique [aqui]() para acessar o website.


## 1. Prefácio
Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto, como mostra a figura abaixo.
![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)


## 2. Resumo
O objetivo deste website é fornecer um ambiente de criptografagem de palavras utilizadas como pistas em jogos infantis do tipo Caça-ao-Tesouro. A codificação é baseada no método da cifra de César. A aplicação é voltada para o público infantil e por isso se propõe a ser simples, intuitiva e lúdica. Espera-se que os adultos usem a página para codificar as dicas e pistas que fornecerão às crianças para que elas descubram onde está escondido o tesouro. Ao mesmo tempo, as crianças devem ser capazes de utilizar a página para decodificar as pistas que recebem dos responsáveis. Dessa forma, espero trazer à um jogo clássico e divertido um pouco mais de interatividade e dinamicidade através do uso de recursos virtuais.

## 3. Funcionalidades
A interface é composta pela área de texto, chave de deslocamento, botões de submissão de texto e um botão de ajuda. Para gerar uma pista codificada você deverá inserir uma palavra ou frase na caixa 'Texto' e decidir quantas casas de deslocamento irá utilizar para criptografar sua pista. Registre esse número na caixa 'deslocamento'. Então use o botão 'Codificar' para gerar o texto criptografado. Para descobrir qual é o texto original, o jogador que recebe o código deve usar o botão 'Decodificar'. Não se esqueça de fornecer a chave de deslocamento original que você usou para codificação junto com a dica, pois a recuperação do texto original só será precisa se o mesmo deslocamento for utilizado para codificar e decodificar. Clique no botão 'Ajuda'se quiser dicas de funcionamento.

## 4. Ferramentas utilizadas
* [Node.js](https://nodejs.org/en/) - usado como plataforma de aplicação 
* [NPM](https://www.npmjs.com/) - usado como gerenciador de pacotes
* [Google Fonts](https://fonts.google.com/) - usado para estilização da fonte
* [Jest](https://jestjs.io/pt-BR/) - usado como framework de testes unitários
* [FlatIcon](https://www.flaticon.com/) e [Freepik](https://br.freepik.com/) - distribuição de imagens livres
* [Figma](https://www.figma.com/) - usado na prototipação do projeto

## 5. Scripts e Arquivos

```
├── README.md
├── package.json
├── src
|   |__ assets
|   ├── cipher.js
│   ├── index.html
│   ├── index.js
|   |__ prototype.png
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```
* package.json: contém informações sobre versão, licença e dependências do projeto.
* src/assets: contém as imagens utilizadas.
* src/cipher.js: contém o objeto cipher, que possui dois métodos: __cipher.encode(offset, string)__: usado para codificar o texto, e __cipher.decode(offset, string)__: usado para traduzir a mensagem codificada. Offset é o número de posições que queremos mover para a esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.
* src/index.html: arquivo com a marcação HTML e link para os arquivos CSS e JS.
* src/index.js: importa o objeto cipher.js e implementa as demais funcionalidades.
* src/prototype.png: contém o protótipo do projeto (realizado na fase de planejamento).
* src/style.css: arquivo com a estilização.
* test/cipher.spec.js: configuração dos testes unitários.

## 6. Instalação
Certifique-se de possuir o Node.js instalado:
```
node -v
```
Certifique-se de possuir o npm instalado:
```
npm -v
```
Instale as dependências (listadas no arquivo package.json) do projeto no seu diretório local:
```
npm install
```
Inicialize a aplicação (index.html) no seu servidor local (localhost):
```
npm start
```
Se quiser, realize os testes unitários:
```
npm test
```
Faça o deploy do projeto para o servidor online (gitpages):
```
npm deply url
```

## 7. Autora
Nathalia Monalisa Francisco: nathaliamonalisa@gmail.com

## 8. Agradecimentos
Colegas de #Squad5 (Luana, Marcela, Mari, Marjorie, Milena, Naere, Natasha, Nathalia) e equipe Laboratoria, em especial Palomita e Mônica.