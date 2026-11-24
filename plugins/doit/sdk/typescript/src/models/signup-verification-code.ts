import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignupVerificationCode = {
  /** The 6-digit code from the verification email. */
  code: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signupVerificationCodeProperties: s.Shape<SignupVerificationCode> = {
  code: s.string(),
};

export const signupVerificationCodeInternalSchema: Schema<SignupVerificationCode> =
  s.object<SignupVerificationCode>(signupVerificationCodeProperties, { additionalProperties: s.json() });

export const signupVerificationCodeSchema: Schema<SignupVerificationCode> = s.lazySchema(() =>
  s.object<SignupVerificationCode>(
    {
      ...signupVerificationCodeProperties,
      code: s.string().check(s.minLength(6), s.maxLength(6), s.pattern("^[0-9]{6}$")),
    },
    { additionalProperties: s.json() },
  ),
);
