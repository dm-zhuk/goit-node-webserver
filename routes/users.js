import express from "express";
const router = express.Router();

const contacts = [
  { id: "1", username: "Felix", surname: "Brown", email: "felix@test.com" },
  { id: "2", username: "Sonya", surname: "Redhead", email: "sonya@test.com" },
  { id: "3", username: "Conan", surname: "Barbarian", email: "conan@test.com" },
];
router.get("/", function (req, res, next) {
  res.json(contacts);
});

router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const contact = contacts.filter((el) => el.id === id);
  res.json(contact);
});

export default router;
