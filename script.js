function startQuiz() {
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
  
    // Esconde a tela inicial e mostra a tela do quiz
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    quizScreen.classList.add("fade-in");
  }

// Perguntas e respostas
const questions = [
    {
      planet: "Mercúrio",
      title: "Fração Própria",
      question: "Resolva: 1/3 + 1/2",
      options: [
        { text: "1/2", correct: false },
        { text: "5/6", correct: true }
      ]
    },
    {
      planet: "Vênus",
      title: "Fração Imprópria",
      question: "Resolva: 5/3 - 1/3",
      options: [
        { text: "4/3", correct: true },
        { text: "1/3", correct: false }
      ]
    },
    {
      planet: "Terra",
      title: "Fração Mista",
      question: "Resolva: 2 1/2 + 3/4",
      options: [
        { text: "3 1/4", correct: true },
        { text: "2 1/2", correct: false }
      ]
    },
    {
      planet: "Marte",
      title: "Fração Decimal",
      question: "Resolva: 0.75 + 0.25",
      options: [
        { text: "1", correct: true },
        { text: "0.5", correct: false }
      ]
    }
  ];
  
  // Mostrar menu com pergunta
  function showMenu(planetIndex) {
    const menu = document.getElementById("menu");
    const feedback = document.getElementById("feedback");
    feedback.textContent = ""; // Limpa feedback anterior
  
    const question = questions[planetIndex - 1];
    document.getElementById("menu-title").textContent = `${question.title} - ${question.planet}`;
    document.getElementById("menu-question").textContent = question.question;
  
    // Gera opções dinamicamente
    const optionsContainer = document.getElementById("menu-options");
    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.onclick = () => checkAnswer(option.correct);
      optionsContainer.appendChild(button);
    });
  
    menu.classList.add("active");
  }
  
  // Fechar menu
  function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.remove("active");
  }
  
  // Verificar resposta
  function checkAnswer(isCorrect) {
    const feedback = document.getElementById("feedback");
    if (isCorrect) {
      feedback.textContent = "Resposta correta! Parabéns!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Resposta incorreta. Tente novamente!";
      feedback.style.color = "red";
    }
    closeMenu();
  }

  function goBack() {
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
  
    // Esconde a tela de quiz e mostra a tela inicial
    quizScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  }