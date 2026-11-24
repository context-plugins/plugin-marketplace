import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OtpChannel = {
  Sms: "sms",
  Email: "email",
} as const;
export type OtpChannel = (typeof OtpChannel)[keyof typeof OtpChannel] | (string & {});

export const otpChannelSchema: EnumSchema<OtpChannel> = s.enumOf<OtpChannel>(OtpChannel);
