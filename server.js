import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import url from "url";

import userRouter from "./server/routes/router.js";

const app = express();
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

// parse requests to body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// app.set('views', path.resolve(__dirname,'views/ejs'));

//load assets
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load routes
app.use("/", userRouter);
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT} `);
});
