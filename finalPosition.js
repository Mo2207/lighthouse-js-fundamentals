
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  let result = [];

  for (let move of moves) {
    if (move === 'north') y++;
    if (move === 'east') x++;
    if (move === 'south') y--;
    if (move === 'west') x--;
  }
  result.push(x,y);
  return result;
}

console.log(finalPosition(moves)); // should return [-1, 4]
