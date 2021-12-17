const request = require("supertest")
const db = require("../../data/dbConfig")
const server = require("../server")
const Joke = require("./jokesModel")

const joke1 = {joke: 'Have you tried the gluten-free Wookiee treats?', punchline: 'No, but I heard they are a little chewy.'}
const joke2 = {joke: 'Where is the best place to shop for lightsabers?', punchline: 'The Darth Mall'}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db("jokes").truncate()
})

afterAll(async () => {
    await db.destroy()
})

it("correct env var", () => {
    expect(process.env.DB_ENV).toBe("testing")
})

describe("Jokes model functions", () => {
    describe("create joke", () => {
        it("adds joke to the db", async () => {
            let jokes
            await Joke.createJoke(joke1)
            jokes = await db("jokes")
            expect(jokes).toHaveLength(1)

            await Joke.createJoke(joke2)
            jokes = await db("jokes")
            expect(jokes).toHaveLength(2)
        })
        it("inserted joke and punchline", async () => {
            const joke = await Joke.createJoke(joke1)
            expect(joke).toMatchObject({joke_id:1, ...joke})
        })
    })
    describe("[DELETE]/ deletesjJoke", () => {
        it("removes joke from db", async () => {
            
        })
    })
})