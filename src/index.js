const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const arrNum = [];   
  let str = '';
  let str1 = '';
  let str2 = '';
  let str3 = '';
  const arr1 = [];
  const arr2 = [];
  const max = expr.length;
   for (let i = 10; i<= max; i = i + 10) {
    str = str  + " " + expr.substring(i-10, i);
  }
  let newStr = str.slice(1);
  //console.log(newStr);
  let arr= newStr.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arrNum.push(Number(arr[i]))
  }
  //console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arrNum[i])) {
    arrNum[i] = " ";
    } }

  //let morse = Object.keys(MORSE_TABLE);
  
  for (let i = 0; i < arr.length; i++) {
  arrNum[i] = String(arrNum[i])
    }
  
  for (let i = 0; i < arrNum.length; i++) {
    let str1 = arrNum[i].replace(/10/g,".");
    arr1.push(str1)
  }
  
  for (let i = 0; i < arr1.length; i++) {
    let str2 = arr1[i].replace(/11/g,"-");
    arr2.push(str2)
  }
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    let str3 = arr2[i].replace("**********"," ");
    arr3.push(str3)
  }
    console.log(arr2);
    let result=[];
    for (let i = 0; i < arr3.length; i++) {
   result.push(MORSE_TABLE[arr3[i]]);
   //result[0].join();
   }
   for (let i = 0; i < arr3.length; i++) {
   result[i] === undefined ? result[i] =' ' : result[i] = result[i];
   }
  
  return result.join('');
  }


module.exports = {
    decode
}