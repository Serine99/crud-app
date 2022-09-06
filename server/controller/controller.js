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
				// res.send(data);
				res.redirect("/add-user");
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occurred during user creation",
				});
			});
	}

	static async userFind(req, res) {
		if (req.query.id) {
			const id = req.query.id;
			Userdb.findById(id)
				.then((data) => {
					if (!data) {
						res.status(404).send({ message: `Not found user with id ${id}` });
					} else {
						res.send(data);
					}
				})
				.catch((err) => {
					res.status(500).send({
						message:
							err.message || "Error occurred while finding user information",
					});
				});
		} else {
			Userdb.find()
				.then((user) => {
					res.send(user);
				})
				.catch((err) => {
					res.status(500).send({
						message:
							err.message || "Error occurred while retrieving user information",
					});
				});
		}
	}

	static async userUpdate(req, res) {
		if (!req.body) {
			return res
				.status(400)
				.send({ message: "Data to update can not be empty" });
		}
		const id = req.params.id;
		Userdb.findByIdAndUpdate(id, req.body)
			.then((data) => {
				if (!data) {
					res.status(404).send({ message: `Cannot update user with id ${id}` });
				} else {
					res.send(data);
				}
			})
			.catch((err) => {
				res.status(500).send({ message: "Error update user information" });
			});
	}
	static async userDelete(req, res) {
		const id = req.params.id;
		Userdb.findByIdAndDelete(id)
			.then((data) => {
				if (!data) {
					res.status(404).send({ message: `Cannot delete with id ${id}` });
				} else {
					res.send({
						message: "User was deleted successfully",
					});
				}
			})
			.catch((err) => {
				res.status(500).send({ message: `Could not delete with id ${id}` });
			});
	}
}

export default usersCtrl;
