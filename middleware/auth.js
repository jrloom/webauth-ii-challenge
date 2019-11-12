module.exports = (req, res, next) => {
  //* use the session functionality instead
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ nope: "nope" });
  }
};
