const User = require("../models/userModel");

async function getUsers(req, res) {
  try {
    const response = await User.findAll();
    res.send(response);
  } catch (error) {
    res.send("eror");
  }
}
async function getUserById(req, res) {
  const id = req.params.id;
  try {
    const response = await User.findByPk(id);
    res.send(response);
  } catch (error) {
    res.send("eror");
  }
}
async function createUser(req, res) {
  try {
    const response = await User.create(req.body);
    res.send(response);
  } catch (error) {
    res.send("eror");
  }
}
async function updateUser(req, res) {
  const id = req.params.id;
  try {
    const response = await User.update(req.body, { where: { id: id } });
    res.send(response);
  } catch (error) {
    res.send("eror");
  }
}
async function deleteUser(req, res) {
  const id = req.params.id;
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
    res.send("user berhasil dihapus");
  } catch (error) {
    res.send("error");
  }
}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
