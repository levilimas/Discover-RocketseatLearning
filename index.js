const questions = [
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
    process.stdout.write(questions[index] + "\n\n\n")
}

ask()