// const message: string = 'Codility We test coders';
// const K: number = 14;
// Return: "Codility We"
// const message: string = 'Why not';
// const K: number = 100;
// Return: "Why not"
// const message: string = 'The quick brown fox jumps over the lazy dog';
// const K: number = 39;
// Return: "The quick brown fox jumps over the lazy"
var message = 'To crop or not to crop';
var K = 21;
// Return: "To crop or not to"
function solution(message, K) {
    // debugger;
    var words = message.split(' ');
    var counter = 0;
    var newMessage = '';
    for (var i = 0; i < words.length; i++) {
        if (counter + words[i].length <= K) {
            counter += words[i].length + 1;
            newMessage += words[i] + ' ';
        }
        else
            break;
    }
    return newMessage.trim();
}
console.log(solution(message, K));
