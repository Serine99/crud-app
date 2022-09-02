export async function homeRoutes(req, res) {
	return res.render("index.ejs");
}
export async function add_user(req, res) {
	return res.render("add_user.ejs");
}
export async function update_user(req, res) {
	return res.render("update_user.ejs");
}
