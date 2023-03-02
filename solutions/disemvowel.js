function disemvowel(str) {
  const split = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const result = [];

  for (let i = 0; i < split.length; i++) {
    const lowercaseChar = split[i].toLowerCase();
    if (!vowels.includes(lowercaseChar)) {
      result.push(split[i]);
    }
  }

  return result.join('');
}

const str1 = 'This website is for losers LOL!';
const str2 = "No offense but,\nYour writing is among the worst I've ever read";
const str3 = 'What are you, a communist?';

disemvowel(str1);
disemvowel(str2);
disemvowel(str3);
