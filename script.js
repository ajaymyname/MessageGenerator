let numArray = [];

const generateRandomNumber = () => {
  randomNumber = Math.floor(Math.random() * 7);
  return randomNumber;
};

const quoteGenerator = () => {
  let inspQuote = "";
  let randomeMessgNum;

  while (1 > 0) {
    randomMessgNum = generateRandomNumber();
    if (!numArray.includes(randomMessgNum)) {
      numArray.push(randomMessgNum);
      break;
    } else if (numArray.length === 7) {
      numArray = [];
    }
  }
  console.log(randomMessgNum);
  switch (randomMessgNum) {
    case 0:
      inspQuote =
        "“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney";
      break;
    case 1:
      inspQuote =
        "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill";
      break;
    case 2:
      inspQuote =
        "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers";
      break;
    case 3:
      inspQuote =
        "“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown";
      break;
    case 4:
      inspQuote =
        "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi";
      break;
    case 5:
      inspQuote =
        "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs";
      break;
    case 6:
      inspQuote =
        "“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen";
      break;
    default:
      inspQuote = "No Quote for today";
  }
  return inspQuote;
};

for (let i = 0; i < 20; i++) {
  console.log(quoteGenerator());
}
