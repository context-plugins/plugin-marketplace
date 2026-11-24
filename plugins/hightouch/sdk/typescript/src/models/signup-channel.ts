import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Delivery channels a signup can consent on. */
export const SignupChannel = {
  Email: "email",
  Sms: "sms",
} as const;
export type SignupChannel = (typeof SignupChannel)[keyof typeof SignupChannel] | (string & {});

export const signupChannelSchema: EnumSchema<SignupChannel> = s.enumOf<SignupChannel>(SignupChannel);
