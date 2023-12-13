document.getElementById("start").addEventListener('click', function () {
    const questions = [
        {
            question: "Who is credited as the inventor of the computer?",
            options: ["John Von Neumann", "Jack Kilby", "Alan Turing", "Bill Gates"],
            correctAnswer: "John Von Neumann"
        },
        {
            question: "Who is considered the first computer programmer?",
            options: ["Adele Goldberg", "Ada Lovelace", "Annie Easley", "Margaret Hamilton"],
            correctAnswer: "Ada Lovelace"
        },
        {   
            question: "Which of the following languages that are still in use today were originally released in the 1970s?",
            options: ["C#", "Python", "C", "F#"],
            correctAnswer: "C"
        }
    ];

    let score = 0;
    
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");

    function buildQuiz() {
        questions.forEach((question, index) => {
            const questionEl = document.createElement("div");
            questionEl.classList.add("question");
            questionEl.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

            question.options.forEach((option, index) => {
                const optionEl = document.createElement("div");
                optionEl.classList.add("option");
                optionEl.innerHTML = `<input type="radio" name="question${index}" value="${option}">
                <label>${option}</label>`;
            questionEl.appendChild(optionEl);
            });
           
            quizContainer.appendChild(questionEl);
        });
    }
    
    function showScore() {
        const userName = document.getElementById("username");
        questions.forEach((question, index) => {
            let selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

            if(selectedOption) {
                const userAnswer = selectedOption.value;

                if(userAnswer === question.correctAnswer) {
                    score ++;
                }
            }
        });
        if( score >= 2) {
            alert("Your score is: " + score + ". Good job, " + userName.value + "!");
        } else {
            alert("Your score is: " + score + ". Better go study, " + userName.value + "!");
        }
        resultContainer.style.display = "block";
    }
    
    document.getElementById("submit").addEventListener("click", function () {
        showScore();
    });

    buildQuiz();
});

