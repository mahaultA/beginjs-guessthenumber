import { prompt } from "./prompt.js";

const generateRandomNumberBetween0and100 = () => {
  return Math.floor(Math.random() * 100);
};

const promptUserNumber = () => {
  const nbEntered = Number(prompt("Ecris un nombre entre 0 et 100 : "));
  if (Number.isNaN(nbEntered) || nbEntered < 0 || nbEntered > 100) {
    return promptUserNumber();
  }
  return nbEntered;
};

const compareTargetNbWithUserNb = (userNb, targetNb) => {
  if (userNb < targetNb) {
    console.log("Le nombre à trouver est + grand");
    let userNumber = promptUserNumber();
    return compareTargetNbWithUserNb(userNumber, targetNb);
  }
  if (userNb > targetNb) {
    console.log("Le nombre à trouver est + petit");
    let userNumber = promptUserNumber();
    return compareTargetNbWithUserNb(userNumber, targetNb);
  }
  console.log("BRAVO!");
  return true;
};

// Le concept est simple. Au début du script, notre application va générer un nombre aléatoire entre 0 et 100 qu'on va appeler userNumber
const targetNumber = generateRandomNumberBetween0and100();

//     Si le nombre n'est pas valide, il informe qu'il faut rentrer un nombre entre 0 et 100
let userNumber = promptUserNumber();

//     Si le nombre est plus petit, il va informer que le nombre userNumber est plus grand
//     Si le nombre est trop grand, il va informer que le nombre userNumber est plus petit

compareTargetNbWithUserNb(userNumber, targetNumber);
//     Si c'est le bon nombre : fin de la partie ! (affiche le nombre d'essais)
