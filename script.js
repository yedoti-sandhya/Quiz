// Creating an array of quiz questions, each object contains:
var quizdata = [ 
    {
       question : 'Which framework is related to JS',// question text, four options (a-d), and the correct option key
       a : '.net',
       b : 'flask',
       c : 'react',
       d : 'django',
       correct : 'c'
    },
    {
       question : 'Which is not a programming language',
       a : 'html',
       b : 'python',
       c : 'js',
       d : 'java',
       correct : 'a'
    },
    {
       question : 'Which is not a framework',
       a : 'react',
       b : 'javascript',
       c : 'angular',
       d : 'django',
       correct : 'b'
    },
    {
       question : 'CSS stands for',
       a : 'cascading style state',
       b : 'cascading style sheet',
       c : 'cascading sheet of style',
       d : 'none',
       correct : 'b'
    },
    {
        question : 'Inside which HTML element is used put the JavaScript',
        a : '<javascript>',
        b : '<scripting>',
        c : '<js>',
        d : '<script>',
        correct : 'd'
    },
    {
        question : 'HTML stands for',
        a : 'Hyperlink Text Markup Language',
        b : 'Hyper Text Markup Language',
        c : 'Home Tool Markup Language',
        d : 'Hyper Transfer Markup Language',
        correct : 'b'
    },
    {
        question : 'What is the correct tag for the largest heading',
        a : '<h6>',
        b : '<heading>',
        c : '<head>',
        d : '<h1>',
        correct : 'd'
    },
    {
        question : 'What is the default value of the `position` property in CSS',
        a : ' `relative` ',
        b : ' `absolute` ',
        c : ' `fixed` ',
        d : ' `static` ',
        correct : 'd'
    },
    {
        question : 'Which tag is used to create a hyperlink',
        a : '<link>',
        b : '<a>',
        c : '<href>',
        d : '<url>',
        correct : 'b'
    },
    {
        question : 'How do you select an element with the id "header" in CSS?',
        a : '#header',
        b : '.header',
        c : 'header',
        d : '*header',
        correct :'a' 
    }
]

// Grabbing references to the HTML elements
var quiz = document.getElementById('quiz') // container for the whole quiz
var answer = document.querySelectorAll('.answer') // NodeList of all answer radio inputs
var question = document.getElementById('question') // question text element
var option_a = document.getElementById('a_value') // label for option a
var option_b = document.getElementById('b_value') // label for option b
var option_c = document.getElementById('c_value') // label for option c
var option_d = document.getElementById('d_value') // label for option d
var submitbtn = document.getElementById('submit') // submit button

// Variables to track the current question index and user's score
var currentQuestion = 0
var quizScore = 0

// Initial function call to load the first question
loadQuiz()

// Function to load the current question and its options into the page
function loadQuiz() {
    deselect() // Clear any selected radio buttons
    
    // Update the question and answer options dynamically from quizdata array
    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a 
    option_b.innerText = quizdata[currentQuestion].b 
    option_c.innerText = quizdata[currentQuestion].c 
    option_d.innerText = quizdata[currentQuestion].d
}

// Function to clear the selected option (so the next question starts fresh)
function deselect() {
    answer.forEach(answer => answer.checked = false)
}

// Event listener for when the user clicks the "Submit" button
submitbtn.addEventListener('click', () => {
    var selectedoption;

    // Loop through each radio button to check which one is selected
    answer.forEach(answer => {
        if (answer.checked) {
            selectedoption = answer.id // Store the ID of the selected option (a, b, c, or d)
        }
    })

    // Check if selected option is the correct answer
    if (selectedoption == quizdata[currentQuestion].correct) {
        quizScore = quizScore + 1 // Increment score if answer is correct
    }

    currentQuestion = currentQuestion + 1 // Move to the next question

    // If all questions are answered, show the final score
    if (currentQuestion == quizdata.length) {
        document.getElementById('quizdiv').innerHTML = 
        `<h1>You have answered ${quizScore} correctly out of ${quizdata.length}<h1>`
    } else {
        // If questions are still remaining, load the next one
        loadQuiz()
    }
})
