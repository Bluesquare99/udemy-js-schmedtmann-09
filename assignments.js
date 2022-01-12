'use strict';
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('ASSIGNMENT!!!!!');

// 1
const scoredGoals = Object.entries(game.scored);
console.log(scoredGoals);
for (const [key, player] of scoredGoals) {
  console.log(`Goal ${Number(key) + 1}: ${player}`);
}

for (const [i, player] of game.scored.entries()) {
  console.log(`Goa ${i + 1}: ${player}`);
}

// 2
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
console.log(`Average is ${sum / 3}`);

// 3
for (const [teamKey, odd] of Object.entries(game.odds)) {
  const teamName = game[teamKey] || 'draw';
  console.log(`Odd of victory ${teamName}:  ${odd}`);
}

// 4
const scorers = {};

const goalScorers = Object.values(game.scored);
for (const player of goalScorers) {
  // If scorer is already there
  if (scorers.hasOwnProperty(player)) {
    scorers[player] += 1;
  }
  // If not, simply add with value 1
  else {
    scorers[player] = 1;
  }
}

console.log(scorers);

/*
  Add one person each to the scorers array as a key 
  1. Create a scorers object
  2. Add one name from array to a time
  -- First check whether that name's already in the object
  -- If it is, add 1 to existing score
  -- If not, add it with a 1 




// 1
const [players1, players2] = game.players;

// 2
const [gk, ...fieldPlayers] = players1;

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...goalScoringNames) {
  let i = 0;
  while (i < goalScoringNames.length) {
    console.log(goalScoringNames[i]);
    i++;
  }

  console.log(`Total goals scored were ${goalScoringNames.length}.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const gameEventsSet = [...new Set(gameEvents.values())];

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average every ${90 / gameEvents.size} minutes`
);

// 4
for (const [time, event] of gameEvents.entries()) {
  time <= 45
    ? console.log(`[FIRST HALF] ${time}: ${event}`)
    : console.log(`[SECOND HALF] ${time}: ${event}`);
}



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

let a = document.querySelector('button').addEventListener('click', function () {
  const input = document.querySelector('textarea').value;
  const inputSplit = input.split('\n');
  const inputTrimmed = [];
  for (const i of inputSplit) {
    const [first, second] = i.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    inputTrimmed.push(output);
  }
  console.log(inputTrimmed);

  let checks = 1;
  for (const k of inputTrimmed) {
    console.log(`${k.padEnd(20, ' ')}${'✅'.repeat(checks)}\n`);
    checks++;
  }
  // const inputUpper = [];
  // for (const j of inputTrimmed) {
  //   const [first, second] = j.split(' ');
  //   const secondArr = [...second];
  //   secondArr[0] = secondArr[0].toUpperCase();
  //   const thirdArr = secondArr.join('');
  //   inputUpper.push(`${first}${thirdArr}`);
  // }
  // console.log(inputUpper);
});

*/
