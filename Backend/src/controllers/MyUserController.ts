import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { _id, ...userData } = req.body;
    
    if (_id && !mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ error: "Invalid _id format" });
    }

    const user = new User({ _id: _id ? new mongoose.Types.ObjectId(_id) : undefined, ...userData });
    
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "$" });
  }
};

export default {
  createCurrentUser,
};
