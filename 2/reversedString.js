function reverseWordsInAString(s) {
  let newWord = "";
  let st = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      newWord += s[i];
    } else {
      if (newWord !== "") {
        st.push(newWord);
        newWord = "";
      }
    }
  }

  // Push the last word (if any)
  if (newWord !== "") {
    st.push(newWord);
  }

  let reversedString = "";

  while (st.length > 0) {
    reversedString += st.pop() + " ";
  }

  return reversedString.trim(); // Trim leading and trailing spaces
}

// Example usage:
let inputString = "Hello World";
let reversedString = reverseWordsInAString(inputString);
console.log(reversedString); // Output: "World Hello"
