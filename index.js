import inquirer from 'inquirer';
// Define the questions for the quiz
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is the capital of France?',
        choices: ['Paris', 'Berlin', 'Madrid', 'London'],
    },
    {
        type: 'list',
        name: 'q2',
        message: 'What is the largest country in the world?',
        choices: ['Russia', 'China', 'USA', 'India'],
    },
    {
        type: 'list',
        name: 'q3',
        message: 'What is the currency of Japan?',
        choices: ['Yen', 'Dollar', 'Pound', 'Euro'],
    },
];
// Define the correct answers for the quiz
const answers = {
    q1: 'Paris',
    q2: 'Russia',
    q3: 'Yen',
};
// Run the quiz
inquirer.prompt(questions).then((userAnswers) => {
    let score = 0;
    // Calculate the user's score
    Object.entries(userAnswers).forEach(([question, answer]) => {
        if (answer === answers[question]) {
            score++;
        }
    });
    // Show the user their score
    console.log(`You scored ${score} out of ${Object.keys(questions).length}`);
});
