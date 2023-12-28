import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signUp = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 1);
  try {
    const newUser = new User({ userName, email, password: hashPassword });
    await newUser.save();
    res.status(201).json("new user created");
  } catch (err) {
    next(err)
  }
};
