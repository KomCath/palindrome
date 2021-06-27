// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
};

// exercise 7.3.1
// Adds `blank` to all strings.
// String.prototype.blank = function blank() {
//   return this.length === 0 || this.includes
// };

// // Reverses a string.
// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // exercise 7.2.1
  //  Returns the lower-case version of the content.
  this.processor = function(string) {
    return string.toLowerCase();
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };

  // Return true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };

  // exercise 7.1.1
  // Makes the phrase LOUDER.
  this.louder = function louder() {
    return this.content.toUpperCase();
  };
}

// Defines a TranslatedPhrase object.

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  };
}

TranslatedPhrase.prototype = new Phrase();

String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
};


// exercise 7.3.1 - 2
Array.prototype.last = function last() {
  return this.slice(-1);
};







