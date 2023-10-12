function vowelsAndConsonants (s) {
    let vowels = s.match(/[aeiou]/gi);
    let consonants = s.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi)
    for(let i = 0; i < vowels.length; i++) {
        console.log(vowels[i])
    }
    for(let j = 0; j < consonants.length; j++) {
        console.log(consonants[j])
    }
}

vowelsAndConsonants("samira")
  
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    var re = /^([aeiou]).*\1$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}


regexVar("obacdo")


/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
*/

//function reverseString(str) {
    // St//var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    //var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    //var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    //return joinArray; // "olleh"
//}

// The above answer was all wrong. The correct answer is:
function reverseString(s) {
    try {
      const reversedString = s.split("").reverse().join("");
      console.log(reversedString);
    } catch (error) {
      console.log(error.message);
      console.log(s)
    }
}
  
// Test the function with different inputs
reverseString("Hello, World!"); // Reverses and prints the string
reverseString(1234); // Outputs "s.split is not a function"

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
*/
function isPositive(a) {
    try {
        if ( a < 0 ) throw new Error("Negative Error")
        if ( a === 0) throw new Error("Zero Error")
        return "YES"; 
    } catch(error) {
       return error.message
    }
 }
 