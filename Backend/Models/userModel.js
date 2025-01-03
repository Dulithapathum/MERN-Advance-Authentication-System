import { Schema, model } from "mongoose";

const userschema = new Schema(
  {
    email: {
      types: String,
      required: true,
      unique: true,
    },
    password: {
      types: String,
      required: true,
    },
    name: {
      types: String,
      required: true,
    },
    lastLogin: {
      types: Date,
      default: Date.now,
    },
    isVerfied: {
      types: Boolean,
      default: false,
    },
    reserPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const user = model("USER", userschema);
