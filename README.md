# ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/87591265/164945242-3c54845b-76d4-4e10-a83a-92609402add2.gif) Trybers and Dragons ![ezgif com-gif-maker](https://user-images.githubusercontent.com/87591265/164945189-e727a241-acd1-4d46-a2fc-4dfdaaaabbcb.gif)

## Habilidades

Neste projeto, eu fui capaz de:

- Exercitar o conhecimento dos pilares da `Programação Orientada a Objetos`: `Herança`, `Abstração`, `Encapsulamento` e `Polimorfismo`;
- Exercitar a utilização de `Composição`;
- Exercitar a criação e utilização de `Interfaces`;
- Implementar, em `TypeScript`: `Classes`, `Instâncias`, `Atributos`, `Métodos` e `Objetos`;
- Exercitar o conhecimento por meio da aplicação dos princípios `SOLID`.

## Como jogar

1. Clone o repositório
  * `git clone https://github.com/italosergio/star-wars-search-planet`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd star-wars-search-planet`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`

3. Modifique o arquivo `/src/index.ts` como quiser, para criar batalhas épicas!


## Quests
  - [x] 1 - Criar a classe `Race`
  - [x] 2 - Criar classes que herdam de `Race` 
  - [x] 3 - Criar a interface `Energy` 
  - [x] 4 - Criar a classe `Archetype` 
  - [x] 5 - Criar classes que herdam de `Archetype`
  - [x] 6 - Criar a interface `Fighter` 
  - [x] 7 - Criar a classe `Character`
  - [x] 8 - Criar a interface `SimpleFighter`
  - [x] 9 - Criar a classe `Monster`
  - [x] 10 - Criar a classe `PVP`
  - [x] 🚀 11 - Criar a classe `PVE` 
  - [x] 🚀 12 - Criar a classe `Dragon` 
  - [x] 🚀 13 - Criar objetos no arquivo `index`

![giphy](https://giffiles.alphacoders.com/207/207669.gif) 

# Contextualizando

No universo de Trybers and Dragons - T&D, quase todos os seres que andam por estas terras pertencem a uma **raça** definida.

As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características dos personagens desde a sua criação, como seus pontos de vida e sua destreza. No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

Alguns seres também possuem uma **energia** e, ao treinarem o uso da energia, passam a possuir um **arquétipo**. De modo gera, os arquétipos definem, a vocação de um personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos e em diversas ocasiões podem acontecer lutas entre personagens diversos, bem como entre personagens e monstros.

No universo de Trybers and Dragons - T&D, quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem suas particularidades.

A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nas pessoas que habitam este universo.

Energia é um atributo vital para a maioria dos seres. No contexto de `Trybers and Dragons`, a energia gasta ao andar, nadar, escalar ou lutar é chamada de *"stamina"*.
Contudo, este universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta ao utilizar magias é chamada de *"mana"*.
Dentro do nosso universo, os seres têm talentos especiais e cada um desses talentos tem seu nome dentro de T&D.

Aqui vamos ter alguns atributos super legais e necessários, que representarão o nome, a potência de seu ataque especial e o custo energético para utilizá-lo, estes sao os arquetipos.Como você pode imaginar, há diversos arquétipos diferentes no mundo de *Trybers and Dragons*, cada um com suas peculiaridades e alinhamentos.
Agora, chegou a hora de você conhecer alguns destes: 
  - `Mage` 🧙‍♀️;
  - `Necromancer` ☠️; 
  - `Warrior` ⚔️;
  - `Ranger` 🍃;

Cada arquétipo possui a habilidade de causar danos em seus inimigos de forma diferente:
  - Os arquétipos `Mage`🧙‍♀️ e `Necromancer`☠️ causam dano por meio de magia, através do uso de `mana`;
  - Os arquétipos `Warrior` ⚔️ e `Ranger` 🍃 causam dano por meio de sua força, usando `stamina`;

Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos, convicções e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Maravilha! Agora já temos tanto nossas raças quanto nossos arquétipos e interfaces definidos, mas antes de sair por aí entrando em tavernas e calabouços, precisamos definir o personagem.

Cada personagem será composto tanto por uma raça quanto por um arquétipo. Essa classe reunirá um conjunto de características que terão o poder de fazer deste ser o mais único possível. Além disso, personagens devem possuir tudo o que se espera de alguém que luta.

Uau, nosso universo de T&D é mesmo fabuloso! No entanto, nem todo mundo que luta é possui capacidades avançadas, como ter uma defesa ou realizar ataques especiais.
Se existem seres que implementam a `interface Fighter`, deve existir seres que implementam a `interface SimpleFighter` também, não é ? Estes são os `Monsters`, criaturas bestiais que apenas atacam outros seres.

A ideia do mundo de T&D ser completamente pacífico provavelmente já deve ter desaparecido de sua mente depois de suas últimas compreensões.

Neste mundo, existem lutas, muitas delas inclusive épicas e aqui são denominadas `Battles` (batalhas). Sua representação abstrata já foi fornecida anteriormente, entretanto, existem tipos específicos de batalhas. Uma destas batalhas chamamos de `PVP`, batalhas entre personagens (ou *player versus player*), que só podem acontecer entre personagens lutadores (`Fighters`). 🧙‍♀️ ⚔️ 🧙‍♂️

Nem todas as batalhas são entre personagens lutadores (`Character`), afinal, há perigos a solta que espreitam ao escurecer, em densas florestas ou em calabouços profundos.
Monstros representam alguns destes perigos, assim, temos as batalhas do tipo `PVE`(*player versus environment*), em que personagens (sempre do tipo `Fighter`) podem lutar contra um ou mais monstros assustadores (`SimpleFighter`). Parece interessante não é?

E seria muito estranho se este mundo se chamasse Trybers and Dragons e não existissem `Dragons`, não é mesmo?
Estes seres magníficos aqui são representados como monstros, mas com a característica especial de possuírem elevados valores de pontos de vida.
Agora repare que, por mais que a gente saiba o que são `Monster`, `Character`, `Dragon`, `PVE`, etc, nenhum desses foi visto em ação. Então a ultima informacão é sobre o arquivo ´src/index.js´ que guarda todas as batalhas épicas que aconteceram ao fim deste projeto.

Espero que se divirtam com esse projeto! ⚔️​🐉​
