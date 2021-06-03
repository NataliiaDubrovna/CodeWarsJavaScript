//1. Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr(n, str){
    let res = "";
    for(let i = 1; i <= n; i++){
        res += str;
    }
    return res;
}

function repeatStr (n, s) {
    return s.repeat(n);
}

console.log(repeatStr(3,"Maria"));

/*2. Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"*/


function bmi(weight, height) {
    let bmi = (weight/Math.pow(height,2));
    if(bmi <= 18.5){
        return "Underweight";
    }else if(bmi <= 25.0){
        return "Normal"
    }else if (bmi <= 30.0){
        return "Overweight"
    }
    else{
        return "Obese"
    }
  }

  function bmi(weight, height) {
    let bmi = (weight/Math.pow(height,2));
    console.log(bmi);
    switch(true){
        case bmi <= 18.5:
            return "Underweight";
        case bmi <= 25.0:
            return "Normal";
        case bmi <= 30.0:
            return "Overweight";
        default:
            return "Obese"
    }
  }

  console.log(bmi(200,165))
  

  //3. Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

    // let pos = 0;
    // while(true){
    //     let foundPos = str.indexOf("!", pos);
    //     if (foundPos == -1) break;
    //     alert(foundPos);
    //     pos = foundPos + 1;
    // }//we can find letter on some position and then continue searching from the next position

    function RemoveExclamationMarks(s) {
        return s.replace(/!/g,'');
    }

    function RRemoveExclamationMarks(s) {
        var arr =s.split("");
        arr = arr.filter(function(e){
              return e !== "!";
          })
          return arr.join("");
      }

    const removeExclamationMarks = (s) => {
        return s.split('').filter((letter) => letter !== '!').join('')
    }

  console.log(RemoveExclamationMarks("Ma!ria ! lol !!!"))

  //4. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.Note: a and b are not ordered!
  function GetSum(a,b){
      if(a == b){
          return a;
      }
      else{
          let sum = 0;
          let smaller = Math.min(a,b);
          let bigger = Math.max(a,b);
          for(let i = smaller; i <= bigger; i++){
              sum += i;
          }
          return sum;
      }
  }
  console.log(GetSum(7,7));

  //5. Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.(In this case, all triangles must have surface greater than 0 to be accepted).
  function isTriangle(a,b,c){
    if( a < b + c && b < a + c && c < a + b){
        return true;
    }
    else{
        return false;
    }
}

/*6. Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output)
"4",  "5" --> "9"
"34", "5" --> "39"  */
function sumStr(a,b) {
    let res = +a + +b
    return `${res}`; 
    // return (+a+ +b)+''  
}
console.log(sumStr("8",""))

/*7. Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null2.
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!*/
// function firstNonConsecutive(arr) {
//     for(let n = 0 ; n < arr.length-1 ; n++){
//         if(arr[n+1] - arr[n] != 1){
//             return arr[n+1];
//         } else return null;
//     }
//     return null;
// }
function firstNonConsecutive(arr) {
    for(let n = 0 ; n < arr.length-1 ; n++){
        if(arr[n+1] - arr[n] != 1){
            return arr[n+1];
        } 
    } 
    return null;
}
// console.log(firstNonConsecutive([5,6,7,9]));
console.log(firstNonConsecutive([5,6,7,8]));

firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1)) 


/*8. Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end.*/

// function multiTable(number) {
//     let res = '';
//     for(let i = 1 ; i <= 10 ; i++){
//       res += `${i} * ${number} = ${i*number} \n`
//     }
//     return res;
//   }
const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
  }
  

console.log(multiTable(6));



/*9. Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/
function powersOfTwo(n){
    let arr = [];
    for(let i = 0; i <= n ; i++){
      arr.push(Math.pow(2,i))
    }
    return arr;
  }


/*10. 
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
Write a function that given a floor in the american system returns the floor in the european system.
With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.
More information here
Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
*/

function getRealFloor(n) {
  if(n <= 0){
    return n;
  }else if(n < 13){
    return n-1;
  }else if(n == 13){
    return "there no 13 floor";
  }else if(n > 13){
    return n-2;
  }
}

/* 11. There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.
Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.
Examples:
flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]*/
function flip(d, a) {
    if(d === "L"){
      a.sort((i,j) => {return j-i})  
    }else if(d === "R"){
      a.sort((i,j) => {return i-j})
    }
    return a;
}

const flipp = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);


// console.log(flip( "L" ,[3,1,6,3,2]))


/*12. Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'*/
function greet (name, owner) {
    let ress =  (name == owner) ? 'Hello boss' : 'Hello guest';
    return ress
  }

/*13. Complete the solution so that it reverses all of the words within the string passed in.
Example:"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"*/

function reverseWords(str){
    let arr = str.split(' '); //split into array
    let stringLength = arr.length; // how much words are in string
    let res = []; // resulting array with reversed words
    for(let i = 0 ; i < stringLength; i++){
        res.push(arr.pop());//take last element from string than adds it in the end of resulting string
    }
    return res.join(" ");
}

function reverseWordss(str){
    return str.split(' ').reverse().join(' ');//reverce() just reordered array ,the first array element becomes the last, and the last array element becomes the first.
}

console.log(reverseWords("some text is here"))


/* 14. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/
function lovefunc(flower1, flower2){
   let res =  ((flower1 % 2 == 0 && flower2 % 2 == 1) || (flower2 % 2 == 0 && flower1 % 2 == 1)) ? true : false;
   return res;
}
console.log(lovefunc(1,4));

/*15. Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5 */

function litres(time) {
    let res = Math.floor(time * 0.5);
    return res;
}

// litres = t => ~~(t / 2);========?????????????????????????????????/

/*16. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/
const quarterOf = (month) => {
    let res = (month <= 3) ? 1 :
    (month <= 6) ? 2 :
    (month <= 9) ? 3 : 4;
    return res;
}

const quarterOff = (month, quarter = 4) => {
    switch (month) {
      case 1:
      case 2:
      case 3:
        quarter = 1;
        break;
      case 4:
      case 5:
      case 6:
        quarter = 2;
        break;
      case 7:
      case 8:
      case 9:
        quarter = 3;
        break;
    }
    return quarter;
  };


/*17. You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0 ){
        sum += arr[i];
      }
    }
    return sum;
}

function positiveSumm(arr) {
    // return arr.reduce(function(sum,current){
    //     if(current > 0){ sum += current}
    // },0)

    return arr.reduce(((sum,current) => current > 0 ? sum +=current : sum += 0),0);
}

console.log(positiveSum([0,-4,9,-2,-1,1]))

/*18. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */
function boolToWord( bool ){
    return (bool) ? 'Yes' : 'No';
}


/*19.Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
function even_or_odd(number) {
    return (number % 2 == 0) ? "Even" : "Odd";
}

/*20.It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */
 function rremoveChar(str){
    let arr = str.split('');
    arr.pop();
    arr.shift();
    let res =  arr.join('');
    return res;
 };
 

 function removeChar(str) {
    // return str.slice(1, -1); //str.slice(start [, end])    Возвращает часть строки от start до (не включая) end. 
    return str.slice(1, str.length-1);
  }

  
console.log(removeChar("some string as well"));
   



/*21. Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

findSmallestInt(args){
    return args.sort((i,j) => i-j).shift();
}//took array , than sorted by sort(sorted sunction)  that deleted first smalest elem from array with shift()


/*22. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
For example:
summation(2) -> 3
1 + 2
summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8*/

let summation = function (num) {
    let sum = 0;
    for(let i = 0; i<= num; i++){
      sum += i
    }
    return sum;
}

let summationn = function (num) {
    let sum = 0;
    let i = 0;
     while( i <= num){
       sum += i;
       i++
     }
    return sum;
}

/*23. */