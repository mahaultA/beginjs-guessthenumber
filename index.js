import { prompt } from "./prompt.js";

const displayWelcomeMsg = () => {
  console.log("Wesh");
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

const generateTargetNumber = (targetNb) => {
  let nbAttempts = 0;
  console.log({ targetNb });
  const compareUserAnswer = (userNb) => {
    if (userNb < targetNb) {
      console.log("Le nombre à trouver est + grand");
      nbAttempts++;
      console.log({ nbAttempts });
      let userNumber = promptUserNumber();
      return compareUserAnswer(userNumber);
    }
    if (userNb > targetNb) {
      console.log("Le nombre à trouver est + petit");
      nbAttempts++;
      console.log({ nbAttempts });
      let userNumber = promptUserNumber();
      return compareUserAnswer(userNumber);
    }
    nbAttempts++;
    console.log({ nbAttempts });
    console.log("BRAVO! Tu as réussi en", nbAttempts, "coup(s)");
    return true;
  };
  console.log({ nbAttempts });
  return compareUserAnswer;
};

// Le concept est simple. Au début du script, notre application va générer un nombre aléatoire entre 0 et 100 qu'on va appeler userNumber
const targetNumber = generateTargetNumber(generateRandomNumberBetween0and100());

let userNumber = promptUserNumber();
const nbEntreParUser = targetNumber(userNumber);
