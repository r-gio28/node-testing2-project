const db = require("../../data/dbConfig")

async function createJoke(joke) {
    const [id] = await db("jokes").insert(joke)
    return db("jokes").where("joke_id",id).first()
}

module.exports = {
    createJoke
}