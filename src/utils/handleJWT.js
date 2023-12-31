const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const tokenSign = async (user) => {
  const sign = jwt.sign(
    { _id: user._id, role: user.role, name: user.firstName, email: user.email },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
