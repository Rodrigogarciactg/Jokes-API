const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.findAllJokes);
  app.post("/api/jokes", JokeController.createNewJoke);
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
  app.put("/api/jokes/:_id", JokeController.updateExistingJoke);
  app.delete("/api/jokes/:_id", JokeController.deleteAnExistingJoke);
};
