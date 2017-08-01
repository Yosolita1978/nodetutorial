// process.argv take arguments for the command-line. 
// You're starting the loop in the 2 index cause the two first arguments are the string "node" and the name of your file



var result = 0;

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i]);

console.log(result);