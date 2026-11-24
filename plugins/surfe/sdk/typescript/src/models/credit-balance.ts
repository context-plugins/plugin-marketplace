import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditBalance = {
  emailCredits?: number;
  mobileCredits?: number;
  searchCredits?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditBalanceSchema: Schema<CreditBalance> = s.object<CreditBalance>(
  {
    emailCredits: s.optional(s.int()),
    mobileCredits: s.optional(s.int()),
    searchCredits: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
