const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", (answer0) => {
  const myAnswers = [];
  myAnswers.push(answer0);
  rl.question("What's an activity you like doing?", (answer1) => {
    myAnswers.push(answer1);
    rl.question("What do you listen to while doing that?", (answer2) => {
      myAnswers.push(answer2);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer3) => {
        myAnswers.push(answer3);
        rl.question("What's your favourite thing to eat for that meal?", (answer4) => {
          myAnswers.push(answer4);
          rl.question("Which sport is your absolute favourite?", (answer5) => {
            myAnswers.push(answer5);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer6) => {
              myAnswers.push(answer6);
              console.log(`${myAnswers[0]} loves ${myAnswers[1]}, listing to ${myAnswers[2]}, eating ${myAnswers[4]} for ${myAnswers[3]}, prefers ${myAnswers[5]}, and is amazing at ${myAnswers[6]}.`);
              rl.close();
            })        
          }) 
        }) 
      })
    })
  })
});

