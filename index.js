module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
};

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns the letters in the content.
  this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi;
    return (this.content.match(lettersRegEx) || []).join("");
    // return Array.from(this.content).filter(c => c.match(lettersRegEx)).join("");
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  // Return true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  };

  // exercise 7.1.1
  // Makes the phrase LOUDER.
  this.louder = function louder() {
    return this.letters().toUpperCase();
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