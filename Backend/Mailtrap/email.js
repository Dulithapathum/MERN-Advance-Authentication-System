import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplate.js";
import { sender, mailtrapClient } from "./mailtrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "verificationCode",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email Sent Successfully:", response);
  } catch (error) {
    console.error("Error Sending Verification Email:", error.message);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Welcome to Our Community!",
      html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
      category: "Welcome Email",
    });

    console.log("Welcome Email Send Successfuly");
  } catch (error) {
    console.error("Error Sending Welcome Email:", error.message);
  }
};

export const sendResetPasswordEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset Your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });

    console.log(" Reset Email Send Successfuly");
  } catch (error) {
    console.error("Error Sending Reset Email:", error.message);
  }
};
