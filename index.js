import { prompt } from "./prompt.js";

const displayWelcomeMsg = () => {
  console.log(`--- BIENVENUE DANS LE JEU "NUMBER GUESSING" 🎮 ---
  Règles :

  1. Le système générera un nombre aléatoire entre 0 et 100.
  2. Ta mission est de deviner ce nombre.
  3. Entre un nombre lorsque le système le demande.
  4. Le système vous indiquera si le nombre à trouver est + grand ou + petit que ta réponse.
  5. Le jeu continue jusqu'à ce que tu trouves le bon nombre.
  
  Commençons ! 🚀`);
};

const generateRandomNumberBetween0and100 = () => {
  return Math.floor(Math.random() * 100);
};

const promptUserNumber = () => {
  const nbEntered = Number(prompt("Ecris un nombre entre 0 et 100 : "));
  if (Number.isNaN(nbEntered) || nbEntered < 0 || nbEntered > 100) {
    console.log("Tu n'as pas écrit un nombre valide");
    return promptUserNumber();
  }
  return nbEntered;
};

const createTargetNumber = (targetNb) => {
  let nbAttempts = 0;
  const compareUserAnswer = (userNb) => {
    if (userNb < targetNb) {
      console.log("Le nombre à trouver est + grand");
      nbAttempts++;
      let userNumber = promptUserNumber();
      return compareUserAnswer(userNumber);
    }
    if (userNb > targetNb) {
      console.log("Le nombre à trouver est + petit");
      nbAttempts++;
      let userNumber = promptUserNumber();
      return compareUserAnswer(userNumber);
    }
    nbAttempts++;
    console.log("BRAVO! Tu as réussi en", nbAttempts, "coup(s)");
    restartGame();
    return true;
  };
  return compareUserAnswer;
};

const restartGame = () => {
  const restartUser = prompt("Veux-tu recommencer la partie (y/n) ? ");
  switch (restartUser) {
    case "y":
      console.log("C'est reparti");
      playGame();
      break;
    case "n":
      console.log("A bientôt");
      break;
    default:
      console.log("A bientôt");
      break;
  }
};

const playGame = () => {
  // DEBUT DU PROGRAMME
  displayWelcomeMsg();
  let targetNumber = generateRandomNumberBetween0and100();
  const diffNumbers = createTargetNumber(targetNumber);

  const userNumber = promptUserNumber();
  diffNumbers(userNumber);
};

playGame();
