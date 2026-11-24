import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EmailValidationChallenge = {
  /** A list of email addresses that ACM uses to send domain validation emails. */
  validationEmails?: string[];
  /** The domain name that ACM uses to send validation emails. */
  validationDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailValidationChallengeSchema: Schema<EmailValidationChallenge> =
  s.object<EmailValidationChallenge>(
    {
      validationEmails: s.optional(s.array(s.string())),
      validationDomain: s.optional(s.string()),
      _keysMap: {
        validationEmails: "ValidationEmails",
        validationDomain: "ValidationDomain",
      },
    },
    { additionalProperties: s.json() },
  );
