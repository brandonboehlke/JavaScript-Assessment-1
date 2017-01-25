//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
var sum = (num10 + parseInt(string8)+one)
console.log(sum)
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
var numberArr= []
for(i=20; i < 101; i++ ){
    if (i%3 == 0){
numberArr.push(i)
    }
}
console.log(numberArr)


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var sum = 0;
for (i=0; i < scores.length; i++){
    sum += scores[i];
}
var average = (sum/scores.length).toFixed(2);
console.log(average)
