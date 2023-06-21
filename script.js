const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

var team = players;

// Create a variable team1 that is a copy of the players array
var team1 = players.slice();

// Create a variable cap1 that is a copy of the person object
var cap1 = Object.assign({}, person);

console.log(team);   // Output: ['John', 'Mike', 'Sarah']
console.log(team1);  // Output: ['John', 'Mike', 'Sarah']
console.log(cap1); 

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
