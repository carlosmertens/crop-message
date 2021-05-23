// const message: string = 'Codility We test coders';
// const K: number = 14;
// Return: "Codility We"

// const message: string = 'Why not';
// const K: number = 100;
// Return: "Why not"

// const message: string = 'The quick brown fox jumps over the lazy dog';
// const K: number = 39;
// Return: "The quick brown fox jumps over the lazy"

const message: string = 'To crop or not to crop';
const K: number = 21;
// Return: "To crop or not to"

function solution(message: string, K: number): string {
  // debugger;
  let words = message.split(' ');
  let counter = 0;
  let newMessage = '';

  for (let i = 0; i < words.length; i++) {
    if (counter + words[i].length <= K) {
      counter += words[i].length + 1;
      newMessage += words[i] + ' ';
    } else break;
  }

  return newMessage.trim();
}

console.log(solution(message, K));
