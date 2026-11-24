import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Present while the request awaits the emailed code. */
export type SignupVerification = {
  required?: boolean;
  expiresAt?: Date;
  resendAfterSeconds?: number;
  sendsRemaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signupVerificationSchema: Schema<SignupVerification> = s.object<SignupVerification>(
  {
    required: s.optional(s.boolean()),
    expiresAt: s.optional(s.dateTime()),
    resendAfterSeconds: s.optional(s.int()),
    sendsRemaining: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
