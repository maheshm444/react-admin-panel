module.exports = (req, res, next) => {
  res.header('Content-Range', 'posts 0-2/20');
  next();
};
