let originalStory = 'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found himself ${userInputs[2]} on a ${userInputs[3]}. Word got out that the team had "debugged" the ${userInputs[3]}';

let userInputs = [];

let numberOfQuestions = 4;
let questionArray = ["Enter a company name","Enter your name","Enter any verb","Enter any noun"];

console.log(`In ${userInputs[0]}, computer pioneer ${userInputs[1]} found himself ${userInputs[2]} on a ${userInputs[3]}. Word got out that the team had "debugged" the ${userInputs[3]}`);

for(let i = 1;i<=numberOfQuestions;i++){
	//console.log(i);	
	userInputs[i-1] = prompt(questionArray[i-1] + "\nYou have " + (numberOfQuestions-i) + " questions left" );
	
}
console.log(userInputs);