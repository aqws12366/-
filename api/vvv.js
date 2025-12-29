module.exports = (req, res) => {
  res.status(200).json({
    text: "我去！这一次要成功吧",
    time: new Date().toString()
  });
};
