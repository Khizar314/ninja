var quiz = {
  "name": "Super Hero Name Quiz",
  "description": "How Many Superheroes Can You Name?",
  "questionStem": "What is The Real Name of ",
  "questions": [
  {"question":"Superman", "answer": "Clarke Kent"},
  {"question":"Wonderwoman", "answer":"Dianna Prince"},
  {"question":"Batman", "answer":"Bruce Wayne"}
  ]
};

// dom references //
var $question = document.getElementById('question');
var $feedback = document.getElementById('feedback');
var $score = document.getElementById('score');
var $start = document.getElementById("button");
var $form = document.getElementById("answer");

// event listeners //
$start.addEventListener('click', function() { play(quiz) }, false);



function update(element, content, klass) {
  var p = element.firstChild || document.createElement("p");

  p.textContent = content;
  element.appendChild(p);
  if(klass) {
    p.className = klass;
  }
}


function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}
hide(form);

function play(quiz) {
var points = 0;
update($score, points);
hide($start);
show($form);

$form.addEventListener('submit', function(event) { event.preventDefault(); check($form[0].value); }, false);
var i = 0;
chooseQuestion();



  function chooseQuestion() {
    var question = quiz.questions[i].question;
    ask(question);
  }

  function ask(question) {
    update($question, quiz.questionStem + question);
    $form[0].value = "";
    $form[0].focus();

  }

  function check(answer) {
    if (answer === quiz.questions[i].answer) {
      update($feedback, "Correct", "right");

      points++;
      update($score, points);
    } else {
      update($feedback, "Wrong!", "wrong");

    }
    i++;
    if (i === quiz.questions.length) {
      gameOver();
    } else {
      chooseQuestion();
    }

  }

  function gameOver() {
    update($question, "Game Over! You scored " + points + " Points ");
  }


}
