import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
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
