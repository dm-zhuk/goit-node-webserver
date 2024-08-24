import express from "express";
const router = express.Router();
/* const contacts = [
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
}); */

router.get("/", (req, res, next) => {
  res.render("index", { title: "Simple express app" });
});

router.get("/setcookie", (req, res, next) => {
  res.cookie("my_cookie", "hello world!");
  res.cookie("my_signed_cookie", "hello world!", { signed: true });
  res.redirect("/");
});

router.get("/clearcookie", (req, res, next) => {
  console.log(req.cookies["my_cookie"]);
  console.log(req.signedCookies["my_signed_cookie"]);
  res.clearCookie("my_cookie");
  res.clearCookie("my_signed_cookie");
  res.redirect("/");
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  res.render("response", { title: "Simple express app", email, password });
});

export default router;
