
let score = 0;
let currentQuestionIndex = 0;
 
let questions = [
    {
        question: 'Seit wann gibt es die Suva?',
 
        answers: ['seit 1950','seit 1970','seit 1918','seit 1900'],
        correctAnswer: 2
    },
    {
        question: 'Wo ist der Hauptsitz der Suva?',
       
        answers: ['Luzern','Basel','Zürich','Bern'],
        correctAnswer: 0
    },
    {
        question: 'Wofür ist die Suva Hauptsächlich zuständig?',
 
        answers: ['Für die Krankenversicherung aller Schweizer Bürger','Für die Unfallversicherung von Arbeitnehmern','Für die Alters- und Hinterlassenenversicherung (AHV)','Für die Pensionskassenverwaltung'],
        correctAnswer: 1
    },
    {
        question: 'Wie finanziert sich die Suva hauptsächlich?',
        answers: ['Durch staatliche Subventionen','Durch Spenden','Durch Prämien von Arbeitgebern und Versicherten','Durch Steuergelder'],
        correctAnswer: 2
    },
    {
        question: 'Wie viele Mitarbeiter hat die Suva?',
   
        answers: ['ca.10000','ca.250','ca.1000','ca.4500'],
        correctAnswer: 3
    },
    {
        question: 'Welche Leistungen deckt die Suva ab?',
        answers: ['Nur Arztkosten','Medizinische Behandlung, Taggeld und Renten','Nur Renten im Todesfall','Nur Rehabilitation'],
        correctAnswer: 1
    },
    {
        question: 'Welche Unfälle versichert die Suva?',
        answers: ['Freizeit','Arbeit','Alle','Auto'],
        correctAnswer: 2
    },
    {
        question: 'In wie vielen Branchen ist die Suva tätig?',
        answers: ['Bau','100','Alle','Gesundheit'],
        correctAnswer: 1
    },
    {
        question: 'Welches Ziel verfolgt die Suva auch?',
        answers: ['Gewinn','Krankenkasse','AHV','Prävention'],
        correctAnswer: 3
    },
];

function displayQuestion(){
 
    if(currentQuestionIndex >= questions.length){
       
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;

        return;
    }

    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;
   
    let answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
 
    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add('btn', 'btn-dark', 'me-2');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkanswer(index);
        answersDiv.appendChild(answerButton);
    });
}
 
displayQuestion();
 
function checkanswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
 
    if(userAnswer == correctAnswer){
        score+= 1;
    }
 
    nextQuestion();
}
 
function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}
