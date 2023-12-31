JsOsaDAS1.001.00bplist00�Vscript_�// Concatenating strings
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: John Doe

// Finding the length of a string
let message = 'Hello, World!';
let length = message.length;
console.log(length); // Output: 13

// Accessing individual characters
let str = 'JavaScript';
console.log(str[0]); // Output: J
console.log(str.charAt(4)); // Output: S

// Converting to uppercase and lowercase
let text = 'Hello, World!';
console.log(text.toUpperCase()); // Output: HELLO, WORLD!
console.log(text.toLowerCase()); // Output: hello, world!

// Extracting substrings
let sentence = 'The quick brown fox jumps over the lazy dog.';
let substring = sentence.substring(4, 15);
console.log(substring); // Output: quick brown

// Splitting a string into an array
let words = sentence.split(' ');
console.log(words); // Output: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

// Checking if a string contains a specific substring
let phrase = 'OpenAI is amazing!';
console.log(phrase.includes('OpenAI')); // Output: true
console.log(phrase.includes('awesome')); // Output: false

// Replacing substrings
let textToReplace = 'Hello, World!';
let newText = textToReplace.replace('World', 'John');
console.log(newText); // Output: Hello, John!

// Removing leading and trailing whitespace
let name = '   Alice   ';
let trimmedName = name.trim();
console.log(trimmedName); // Output: Alice                              � jscr  ��ޭ