import Userdb from "../model/model.js";

// create and save new user

class usersCtrl {
	static async userCreate(req, res) {
		if (!req.body) {
			res.status(400).send({ message: "Content can not be empty" });
			return;
		}

		const user = new Userdb({
			name: req.body.name,
			email: req.body.email,
			gender: req.body.gender,
			status: req.body.status,
		});
		user
			.save(user)
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occurred during user creation",
				});
			});
	}

	static async userFind(req, res) {}
	static async userUpdate(req, res) {}
	static async userDelete(req, res) {}
}

export default usersCtrl;
