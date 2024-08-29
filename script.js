let questions = [
  {
    "question": "What is the capital of Japan?",
    "answer 1": "Tokyo",
    "answer 2": "Kyoto",
    "answer 3": "Osaka",
    "correctAnswer": "Tokyo"
  },
  {
    "question": "Which element has the chemical symbol 'O'?",
    "answer 1": "Oxygen",
    "answer 2": "Osmium",
    "answer 3": "Oganesson",
    "correctAnswer": "Oxygen"
  },
  {
    "question": "Which language is primarily spoken in Brazil?",
    "answer 1": "Spanish",
    "answer 2": "Portuguese",
    "answer 3": "French",
    "correctAnswer": "Portuguese"
  },
  {
    "question": "What is the largest planet in our solar system?",
    "answer 1": "Earth",
    "answer 2": "Jupiter",
    "answer 3": "Saturn",
    "correctAnswer": "Jupiter"
  },
  {
    "question": "Which ocean is the deepest?",
    "answer 1": "Atlantic Ocean",
    "answer 2": "Indian Ocean",
    "answer 3": "Pacific Ocean",
    "correctAnswer": "Pacific Ocean"
  }
];

let currentQuestion = 0;
  let rightQuestions = 0;

function init(){

    document.getElementById('all-question').innerHTML = questions.length;

showquestion();
}

function showquestion() {

  if (currentQuestion >= questions.length) {
      document.getElementById('endscreen').style = "";
      document.getElementById('question-body').style = 'display:none'
      document.getElementById('question-beantwortet').innerHTML = questions.length;
      document.getElementById('right-of-question').innerHTML = rightQuestions;
  }
    else {   

    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion +1;
    document.getElementById('questionstext').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question['answer 1'];
    document.getElementById('answer_2').innerHTML = question['answer 2'];
    document.getElementById('answer_3').innerHTML = question['answer 3'];
    // document.getElementById('answer_4').innerHTML = question['answer 4'];

    
 }

}


function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection);


//  let rightOfAnswer = `answer ${question['correctAnswer']}`;

    // `selection` formatini to'g'rilash
    let adjustedSelection = selection.replace('_', ' '); // answer_1 -> answer 1

    // Tanlangan javob matnini olish
    let selectedAnswerText = question[adjustedSelection]; // Bu yerda `adjustedSelection` to'g'ri xususiyatga murojaat qiladi

       let rightOfAnswer = null;
    for (let key in question) {
        if (question[key] === question['correctAnswer']) {
           
          rightOfAnswer = key.replace(' ', '_'); // "answer 1" -> "answer_1"
            break;
           
        }
    }

    // Konsolda tekshirish
    console.log('Selected answer text is', selectedAnswerText);
    console.log('Correct answer is', question['correctAnswer']);

    // Matnlarni solishtirish
    if (selectedAnswerText === question['correctAnswer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
         rightQuestions++;
        console.log('Richtige Antwort!!');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
                document.getElementById(rightOfAnswer).parentNode.classList.add('bg-success');

        console.log('Falsche Antwort!!');

    }
        document.getElementById('next-button').disabled = false;

}

   function nextQuestion(){
        currentQuestion++;
        resetAnswerbutton();
        showquestion();
   }

   function resetAnswerbutton(){
       document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
       document.getElementById('answer_1').parentNode.classList.remove('bg-success');
       document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
       document.getElementById('answer_2').parentNode.classList.remove('bg-success');
       document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
       document.getElementById('answer_3').parentNode.classList.remove('bg-success');

   }

   








// function answer(selection) {
//         let question = questions[currentQuestion];
//     // Hozirgi ko'rsatilgan savolni olish uchun `questions` massivining `currentQuestion` indeksidagi elementni olamiz.
//     // Bu `question` o'zgaruvchisida hozirgi savol, javob variantlari va to'g'ri javob saqlanadi.
//     console.log('selected answer is ', selection);
    // Konsolga foydalanuvchi tomonidan tanlangan javob variantini chiqaradi. `selection` parametri bu yerda `answer 1`, `answer 2` kabi stringlar bo'lishi kerak.

//         let selectedQuestionNumber = question[selection];
//             // Bu yerda `selection` orqali tanlangan javobning matni olinadi (masalan, "Tokyo").

//         console.log('selectedQuestionNumber is ', selectedQuestionNumber);
//             // Tanlangan javobning raqamini (masalan, "1", "2", yoki "3") konsolga chiqaradi.

//         console.log('current correct answer is', question['correctAnswer']);
//     // Hozirgi savolning to'g'ri javobini konsolga chiqaradi.

//         if(selectedQuestionNumber == question['correctAnswer']) {
//             // Bu shart operatori `selectedQuestionNumber` (tanlangan javob raqami) bilan `question['correctAnswer']` (to'g'ri javob) ni solishtiradi.
//         // Lekin bu yerda xato bor: `selectedQuestionNumber` tanlangan javobning raqami, `correctAnswer` esa to'g'ri javobning matni (masalan, "Tokyo").
//         // Bunda raqamni matn bilan solishtirish noto'g'ri natija beradi. To'g'ridan-to'g'ri `answer` variantlarini to'g'ri javob bilan solishtirish kerak.
//             console.log('richtige Antwort!!');
//                             document.getElementById(selection).parentNode.classList.add('bg-success');

//             } else {
//                       document.getElementById(selection).parentNode.classList.add('bg-danger'); 
//                 console.log('falsche Antwort!!');
//             }

        

// }
init();


