const express = require("express");
const MenuController = require("../controllers/menu");

//Middlewares
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/add-menu", [md_auth.ensureAuth], MenuController.addMenu);
api.get("/get-menus", MenuController.getMenus);
api.put("/update-menu/:id", [md_auth.ensureAuth], MenuController.updateMenu);
api.put("/activate-menu/:id", [md_auth.ensureAuth], MenuController.activateMenu);

module.exports = api;
