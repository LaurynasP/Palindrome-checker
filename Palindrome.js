function palindrome(str) {
  let paliRegex = /[a-z0-9]/;
  // Removes unnecessary characters and makes it lowercase
  str = str.toLowerCase().split("").filter(item=>paliRegex.test(item)).join("");
  // Checks if palindrome
  let startIndex = 0, endIndex = str.length-1;
  while(startIndex<endIndex){
    if(str[startIndex]!=str[endIndex]){
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
}

palindrome("A man, a plan, a canal. Panama"); // returns true
