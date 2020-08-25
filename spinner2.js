const characters = '|/-\|/-\|';
let interval = 100;

const printCharacter = (character) => {
  setTimeout(() => {
    process.stdout.write(`\r ${character}   `); 
  }, interval);
};

for (const character of characters) {
  printCharacter(character);
  interval += 200;
}

setTimeout(() => {
  console.log('');
}, (characters.length * 200) + 100);