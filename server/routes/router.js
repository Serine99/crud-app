import express from "express";
import { homeRoutes, add_user, update_user } from "../services/render.js";
const route = express.Router();

route.get("/", homeRoutes);
route.get("/add-user", add_user);

route.get("/update-user", update_user);

export default route;
