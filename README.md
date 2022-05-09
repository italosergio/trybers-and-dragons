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
    * 
3. Modifique o arquivo `/src/index.ts` como quiser, para criar batalhas épicas!

4. Inicialize o projeto:
    * `npm start`


## Quests
  - [x] 1 - [Criar a classe `Race`](https://github.com/italosergio/trybers-and-dragons/commit/9b87d1ac16ce1ddd1e3e09469423bffd63dedb32)
  - [x] 2 - [Criar classes que herdam de `Race`](https://github.com/italosergio/trybers-and-dragons/commit/f2ce512ea61a5869e32ffd30b1fba48f181a7b99)
  - [x] 3 - [Criar a interface `Energy`](https://github.com/italosergio/trybers-and-dragons/commit/6d139e418d5823d736d6e44323925140a7a900ac)
  - [x] 4 - [Criar a classe `Archetype`](https://github.com/italosergio/trybers-and-dragons/commit/8eb630252a3722ec263e6094476119dc36e74cf5)
  - [x] 5 - [Criar classes que herdam de `Archetype`](https://github.com/italosergio/trybers-and-dragons/commit/80a856f350b85ab3f66b94909ea2e2ed7b4750e3)
  - [x] 6 - [Criar a interface `Fighter`](https://github.com/italosergio/trybers-and-dragons/commit/e7068464ce513aac6e1bfc759112a3e9b442b26b) [[refactor I]](https://github.com/italosergio/trybers-and-dragons/commit/2b328ac15358f51506147973714486d8e89e80ff) [[refactor II]](https://github.com/italosergio/trybers-and-dragons/commit/23f75f029c566035985489ce4e1b33bef4a104a0)
  - [x] 7 - [Criar a classe `Character`](https://github.com/italosergio/trybers-and-dragons/commit/0028e9c0e738d46acbd51638249ded59f7fd2efe) [[fix]](https://github.com/italosergio/trybers-and-dragons/commit/34221f5a862985bab1ead61bece48c430671f734) [[refactor I]](https://github.com/italosergio/trybers-and-dragons/commit/282ae0ae67a35df0f231c16f6053b2a51bda7139) [[refactor II]](https://github.com/italosergio/trybers-and-dragons/commit/d83ac3d4eb15f860606debcf26296dd590973415)
  - [x] 8 - [Criar a interface `SimpleFighter`](https://github.com/italosergio/trybers-and-dragons/commit/fd6c8c8fcd9908be1dcad814b939425949b1174c)
  - [x] 9 - [Criar a classe `Monster`](https://github.com/italosergio/trybers-and-dragons/commit/f5fe9a5c75867aefce420a665e24db2d4ad96ed2) [[refactor I]](https://github.com/italosergio/trybers-and-dragons/commit/20127aa28a31286fc6d1d6234c432d1e87bcae4c)
  - [x] 10 - [Criar a classe `PVP`](https://github.com/italosergio/trybers-and-dragons/commit/cf033b4f6cf08193de16c6849beefe1104fb8028)
  - [x] 🚀 11 - [Criar a classe `PVE`](https://github.com/italosergio/trybers-and-dragons/commit/59322ba4e226247aa5ca87917c9a6ad714aed86b) [[refactor I]](https://github.com/italosergio/trybers-and-dragons/commit/be7b49cee9e5e2f8fbd4ad132b00b88dc9a8f568) [[refactor II]](https://github.com/italosergio/trybers-and-dragons/commit/b388e743400d2236d9aa6b0ac16092324c3ec846)
  - [x] 🚀 12 - [Criar a classe `Dragon`](https://github.com/italosergio/trybers-and-dragons/commit/3d57035e25cf4711c8f194d1d0414cc0b0faa017) [[refactor I]](https://github.com/italosergio/trybers-and-dragons/commit/0595f6d1c01b0d16a57bc43f4342c7a8c3c6b74b)
  - [x] 🚀 13 - [Criar objetos no arquivo `index`](https://github.com/italosergio/trybers-and-dragons/commit/c395fdebe1bf7733780643f652277e506b7ff7d0)

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
