// const bcrypt = require("bcryptjs");
const router = require("express").Router();

const authRouter = require("./auth");
const usersRouter = require("./user");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

// * sanity
router.get("/", (req, res) => {
  res.json({ api: "Good news everyone", session: req.session });
});

module.exports = router;
