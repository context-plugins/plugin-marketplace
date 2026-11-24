import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code1 = {
  ValidationError: "VALIDATION_ERROR",
  DuplicateSubscription: "DUPLICATE_SUBSCRIPTION",
  UrlValidationFailed: "URL_VALIDATION_FAILED",
  WebhookVerificationFailed: "WEBHOOK_VERIFICATION_FAILED",
  Forbidden: "FORBIDDEN",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type Code1 = (typeof Code1)[keyof typeof Code1] | (string & {});

export const code1Schema: EnumSchema<Code1> = s.enumOf<Code1>(Code1);
