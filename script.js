document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const questions = [
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/RockAndRollLullaby-BJThomas",
      correct: "Rock And Roll Lullaby",
      options: ["UM", "DOIS", "Rock And Roll Lullaby", "QUATRO"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/AloneAgainNaturally-GilbertOSullivan.mp3",
      correct: "Alone Again Naturally",
      options: ["Magg", "My Sw", "I N", "Alone Again Naturally"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/AmericanPie-DonMcLean.mp3",
      correct: "American Pie",
      options: [
        "DFASDF",
        "5",
        "American Pie",
        "HGH"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/Angie-TheRollingStones.mp3",
      correct: "Angie",
      options: [
        "Angie",
        "FDGS",
        "JGFJ",
        "Face"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/AnotherBrickintheWall-PinkFloyd.mp3",
      correct: "Another Brick in the Wall",
      options: [
        "HGJD",
        "Another Brick in the Wall",
        "TYK",
        "JHGJ"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/BabyILoveYourWay-PeterFrampton.mp3",
      correct: "Baby I Love Your Way",
      options: [
        "HFD",
        "FDS",
        "Baby I Love Your Way",
        "GFDFG"
      ]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/BadMoonRising-CreedenceClearwaterRevival.mp3",
      correct: "Bad Moon Rising",
      options: ["FDG", "Bad Moon Rising", "FDSFDS", "DFASD"]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/MamyBlue-RickyShayne.mp3",
      correct: "Mamy Blue",
      options: [
        "ToGFFDGDFGro",
        "Chame",
        "Mamy Blue",
        "FSD"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/RainRainRain-SimonButterfly.mp3",
      correct: "Rain Rain Rain",
      options: [
        "DFSD",
        "FDDFASD",
        "Rain Rain Rain",
        "RTEJKGF"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/skylinepigeon_eltonjhon.mp3",
      correct: "skyline pigeon",
      options: [
        "FGDF",
        "HGFH",
        "GF",
        "skyline pigeon"
      ]
    }

    // ... (as outras músicas aqui)
  ];

  // Descrições das músicas
  const descriptions = [
    "Don't Let Me Down – The Hollies (1969): Escrita por Tony Hicks, Allan Clarke e Terry Sylvester, essa música é um dos clássicos da banda, mas não deve ser confundida com a famosa canção dos Beatles com o mesmo nome.",
    "I Never Cry – Alice Cooper (1976): Alice Cooper escreveu essa balada emocional sobre sua luta contra o alcoolismo. Diferente de seu estilo chocante habitual, essa música é uma das mais sentimentais de sua carreira.",
    "I Started a Joke – Bee Gees (1968): Robin Gibb revelou que a inspiração para essa música veio durante um voo de avião. A letra melancólica e introspectiva fez dela um dos maiores sucessos da banda.",
    "It's a Heartache – Bonnie Tyler (1977):🔹 Essa música foi um grande sucesso global, mas poucos sabem que Bonnie Tyler gravou sua versão enquanto se recuperava de uma cirurgia nas cordas vocais, o que deu um toque ainda mais rouco à sua voz.",
    "Love Hurts – Nazareth (1975):🔹 Originalmente gravada pelos Everly Brothers em 1960, a versão do Nazareth se tornou a mais famosa e um hino das baladas de rock.",
    "Mississippi – Pussycat (1975):🔹 O grupo holandês Pussycat alcançou o topo das paradas em vários países com essa música. Curiosamente, a melodia lembra o estilo country americano, mesmo sendo composta na Europa.",
    "Sailing – Rod Stewart (1975):🔹 Embora seja um dos maiores sucessos de Rod Stewart, a música foi originalmente gravada pela banda The Sutherland Brothers em 1972. A versão de Stewart a transformou em um hit mundial.",
    "Tornerò – I Santo California (1975):🔹 Esse clássico romântico italiano se tornou um fenômeno na Europa e América Latina, sendo uma das músicas mais regravadas da época.",
    "Wuthering Heights – Kate Bush (1978):🔹 Inspirada no livro homônimo de Emily Brontë, Kate Bush escreveu a música aos 18 anos e se tornou a primeira mulher a alcançar o topo das paradas britânicas com uma composição própria.",
    "My Mistake – Pholhas (1974):🔹 Embora a banda Pholhas seja brasileira, suas músicas são cantadas em inglês, e 'My Mistake' fez tanto sucesso que muitas pessoas achavam que o grupo era estrangeiro.",
    "",
    "Skyline Pigeon – Elton John (1969):🔹 Foi uma das primeiras músicas compostas por Elton John e Bernie Taupin. Ele mesmo considera essa uma de suas melhores composições dos primeiros anos de carreira."
    // Adicione as descrições das músicas aqui
    // ...
  ];

  let currentQuestionIndex = 0;
  let score = parseInt(localStorage.getItem("playerScore")) || 0;
  const audio = document.getElementById("audio");
  const optionsContainer = document.getElementById("options");
  const questionText = document.getElementById("question");
  const scoreText = document.getElementById("score");
  const gameContainer = document.getElementById("game");
  const finalScreen = document.getElementById("final-screen");

  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showFinalScreen();
      return;
    }

    const q = questions[currentQuestionIndex];
    audio.src = q.song;
    questionText.textContent = "Qual é a música?";
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio
        .play()
        .catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(answer) {
    if (currentQuestionIndex >= questions.length) return;

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (answer === q.correct) {
      score += 10;
    } else {
      score -= 5;
    }

    localStorage.setItem("playerScore", score);
    scoreText.textContent = `Pontuação: ${score}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScreen();
    }
  }

  function showFinalScreen() {
    audio.pause();
    audio.currentTime = 0;

    gameContainer.style.display = "none";
    finalScreen.style.display = "block";

    finalScreen.style.textAlign = "left";
    finalScreen.style.padding = "20px";

    const q = questions[currentQuestionIndex - 1]; // Última pergunta

    let commentsHTML = "";
    for (let i = 0; i < questions.length; i++) {
      commentsHTML += `<p><strong>Comentário sobre a música ${
        i + 1
      }:</strong> ${descriptions[i]}</p>`;
    }

    // Atualizando a tela final com a pontuação
    finalScreen.innerHTML = `
    <h1 style="color: red; font-weight: bold; font-size: 2em;">Parabéns! Você já está com ${score} pontos!</h1>
    <p>Sua pontuação final: <strong>${score}</strong> 🎉</p>
    <div>${commentsHTML}</div>
    
    <!-- Contêiner para botões centralizados -->
    <div class="buttons-container">
        <button id="restart-btn">Jogar Novamente</button>
        <button id="exit-btn">Fechar o Jogo</button>
    </div>
  `;

    // Ações dos botões
    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function restartGame() {
    currentQuestionIndex = 0;
    score = parseInt(localStorage.getItem("playerScore")) || 0; // Recupera a pontuação salva
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }
  function exitGame() {
    const newUrl = `https://radialistaedsonleite.github.io/jogos-HTML/?score=${score}`;
    alert("Obrigado por jogar! Até a próxima! 🎶");
    window.location.href = "https://radialistaedsonleite.github.io/jogos-HTML/";
  }

  scoreText.textContent = `Pontuação: ${score}`;
  loadQuestion();
});
