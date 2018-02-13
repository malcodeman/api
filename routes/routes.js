const UsersController = require("../controllers/users_controller");

module.exports = app => {
  app.get("/", UsersController.greeting);
  app.post("/api/users", UsersController.create);
  app.get("/api/users", UsersController.get); 
};
