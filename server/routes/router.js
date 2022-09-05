import express from "express";
import { homeRoutes, add_user, update_user } from "../services/render.js";
import usersCtrl from "../controller/controller.js";
const route = express.Router();

route.get("/", homeRoutes);
route.get("/add-user", add_user);

route.get("/update-user", update_user);

route.post("/api/users", usersCtrl.userCreate);
route.get("/api/users", usersCtrl.userFind);
route.put("/api/users/:id", usersCtrl.userUpdate);
route.delete("/api/users/:id", usersCtrl.userDelete);

export default route;
