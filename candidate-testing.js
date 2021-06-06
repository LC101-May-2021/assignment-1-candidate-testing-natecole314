const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = [
  "Who was the first American woman in space?",
  "True or false: 5 kilometer == 5000 meters?",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
  "What is the minimum crew size for the ISS?"
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
]
let strCorrectAnswers = correctAnswers.join().toLowerCase();
let arrCorrectAnswers = strCorrectAnswers.split(",");
let candidateAnswers = ["","","","",""];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ")
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
   console.log()
   console.log(candidateName + ", thank your for entering your name!")
 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i = 0;i < 5;i++){
  candidateAnswers[i] = input.question(questions[i])
  
}
}

function gradeQuiz(candidateAnswers) {
console.log(`
Candidate Name: ${candidateName}
1) ${questions[0]}
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}

2) ${questions[1]}
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}

3) ${questions[2]}
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) ${questions[3]}
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}

5) ${questions[4]}
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}`)

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = 0;

  
  for (i = 0; i < correctAnswers.length ;i++){
    let strCandidateAnswers = candidateAnswers.join().toLowerCase()
    //console.log(strCandidateAnswers)
    let arrCandidateAnsLower = strCandidateAnswers.split(",")
    //console.log(arrCandidateAnsLower)
    if(arrCandidateAnsLower[i] === arrCorrectAnswers[i]){
      grade +=1
    }
    
  }
  console.log()
  console.log(`>>> Overall Grade: ${(grade/5)*100}% (${grade} of 5 responses correct) `)
  if(grade >= 4){
    console.log(">>> Status: PASS <<<")
  }else{
    console.log(">>> Status: FAILED <<<")
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //console.log(candidateName + ", thank your for entering your name!")
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};