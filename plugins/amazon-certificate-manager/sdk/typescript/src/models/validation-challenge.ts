import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dnsValidationChallengeSchema, type DnsValidationChallenge } from "./dns-validation-challenge.js";
import {
  emailValidationChallengeSchema,
  type EmailValidationChallenge,
} from "./email-validation-challenge.js";

/** Exactly one member is set. */
export type ValidationChallenge = {
  emailValidationChallenge?: EmailValidationChallenge;
  dnsValidationChallenge?: DnsValidationChallenge;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationChallengeSchema: Schema<ValidationChallenge> = s.object<ValidationChallenge>(
  {
    emailValidationChallenge: s.optional(s.lazy(() => emailValidationChallengeSchema)),
    dnsValidationChallenge: s.optional(s.lazy(() => dnsValidationChallengeSchema)),
    _keysMap: {
      emailValidationChallenge: "EmailValidationChallenge",
      dnsValidationChallenge: "DnsValidationChallenge",
    },
  },
  { additionalProperties: s.json() },
);
