quizData=[
    {
        question:"Which of the following is the capital of India?",
        a: "delhi",
        b:"Lucknow",
        c:"Indore",
        d:"Mumbai",
        correctanswer:"a"

    },
    {
        question:"Who is the first prime minister of India??",
        a: "Jawaharlal Nehru",
        b:"mahatma Gandhi",
        c:"Subash Chandra Bose",
        d:"narendra Modi",
        correctanswer:"a"

    },
    {
        question:"Which of the month has only 30 days?",
        a: "November",
        b:"December",
        c:"January",
        d:"March",
        correctanswer:"a"

    },
    {
        question:"In which year India got Independence?",
        a: "1945",
        b:"1856",
        c:"1947",
        d:"2001",
        correctanswer:"c"

    },
    {
        question:"When is Republic day celebrated?",
        a: "26 january",
        b:"15 august",
        c:"26 november",
        d:"28 december",
        correctanswer:"a"
    },
    {
        question:"Whixh of the following cities have a port?",
        a: "delhi",
        b:"Lucknow",
        c:"Indore",
        d:"Mumbai",
        correctanswer:"d"

    },
    {
        question:"Who is known as missile man of India?",
        a: "Abdul Kalam",
        b:"Mahatma Gandhi",
        c:"CV raman",
        d:"Issac Newton",
        correctanswer:"a"

    },
    {
        question:"Which country is the largest producer of Coffee?",
        a: "India",
        b:"China",
        c:"Brazil",
        d:"Japan",
        correctanswer:"c"

    },
    {
        question:"Which of the following is not a city?",
        a: "delhi",
        b:"Goa",
        c:"Indore",
        d:"Mumbai",
        correctanswer:"b"

    },
    {
        question:"which city is known as cyber hub of India?",
        a: "Banglore",
        b:"Lucknow",
        c:"Indore",
        d:"Mumbai",
        correctanswer:"a"

    }
]
const quizElement= document.getElementById("quiz")
const question = document.getElementById("question")
const answeElement= document.querySelectorAll(".answer")
const a_text= document.getElementById("a_text")
const b_text= document.getElementById("b_text")
const c_text= document.getElementById("c_text")
const d_text= document.getElementById("d_text")
const submit= document.getElementById("submit")
var score=0
var quiznumber=0

function loadquiz(){

    deleteAnswer();
    var currentQuiz=quizData[quiznumber]
    question.innerHTML=currentQuiz.question
    a_text.innerHTML=currentQuiz.a
    b_text.innerHTML=currentQuiz.b
    c_text.innerHTML=currentQuiz.c
    d_text.innerHTML=currentQuiz.d
     

}
function deleteAnswer(){
    answeElement.forEach(i=>{i.checked=false})
}
function getTheAnswer(){
    var myanswer
    answeElement.forEach(i=>{
        if(i.checked=== true){
            myanswer=i.id
        }
    })
    return myanswer
}
submit.addEventListener("click",()=>{
    var finalAnswer = getTheAnswer()
    console.log("final:",finalAnswer)
if(finalAnswer){
    if(finalAnswer=== quizData[quiznumber].correctanswer){
        score++
    }
    quiznumber++
    if(quiznumber<quizData.length){
        loadquiz()
    }
    else{
        quizElement.innerHTML =`<h2> you answered ${score}/${quizData.length} correctly</h2>
        <button onclick="location.reload()">Try Again</button>`
    }
}
})

loadquiz()

