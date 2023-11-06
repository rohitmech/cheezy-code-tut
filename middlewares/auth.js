import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;

console.log(SECRET_KEY)
export const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, "NOTESAPI");
      req.userId = user.id;
    } else {
      return res.status(401).json({ message: "Unauthorized User" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized User" });
  }
};

