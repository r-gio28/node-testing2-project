exports.seed = function(knex) {
    return knex('jokes').truncate()
        .then(function () {
            return knex('jokes').insert([
                {joke: "What did Darth Vader say when he walked into a vegan restaurant?", punchline: "I find your lack of steak disturbing"},
                {joke: "What do you call an invisible droid", punchline: "C-through-PO"},
                {joke: "Which program do jedi use to open PDF files?", punchline: "Adobe-Wan Kenobi"},
                {joke: "Is BB hungry?", punchline: "No, BB-8"},
                {joke: "How does Darth Vader like his toast?", punchline: "On the dark side"},
                {joke: "What do you call a pirate droid?", punchline: "Arrrggh-2 D2"},
            ]);
        });    
};