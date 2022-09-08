import axios from "axios";

export async function homeRoutes(req, res) {
	axios
		.get("https://crud-app-serine.herokuapp.com/api/users")
		.then(function (response) {
			// console.log(response.data);
			return res.render("index", { users: response.data });
		})
		.catch((err) => {
			res.send(err);
		});
}
export async function add_user(req, res) {
	return res.render("add_user.ejs");
}
export async function update_user(req, res) {
	axios
		.get("https://crud-app-serine.herokuapp.com/api/users", { params: { id: req.query.id } })
		.then(function (userdata) {
			return res.render("update_user", { user: userdata.data });
		})
		.catch((err) => {
			res.send(err);
		});
}
