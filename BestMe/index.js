const questions = [
    "What's your name?",
    "Did you Train today?",
    "what made you happy today?",
    "What made you upset?",
    "What could you do to make it better?",
    "What did you learn today?",
    "Fulfilled all the tasks the proposed projects?",
    "What's left for tomorrow?",
    "Why couldn't you keep up?",
    "Helped anyone today?"
];

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " => ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Bacana ${answers[0]}!

    Did you Train today?
    ${answers[1]}

    what made you happy today?
    ${answers[2]}
    
    What made you upset?
    ${answers[3]}
    
    What could you do to make it better?
    ${answers[4]}
    
    What did you learn today?",
    ${answers[5]}
    
    Fulfilled all the tasks the proposed projects?
    ${answers[6]}
    
    What's left for tomorrow?
    ${answers[7]}
    
    Why couldn't you keep up?
    ${answers[8]}
    
    Helped anyone today?
    ${answers[9]}
    
    Volte amanhã para NOvas reflexões sobre seu dia !
    `)
})