import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Credentials for OTP authentication */
export type OtpCredentials = {
  /** 6-digit one-time password */
  otp: string;
};

export const otpCredentialsSchema: Schema<OtpCredentials> = s.object<OtpCredentials>({
  otp: s.string(),
});
