function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '')
  };

  // this function will use regex to search the string for 
  //any occurence of a vowel. While straight forward the gem
  // the /gi. This allows us to search the whole string 
  // and not stop at the first inference