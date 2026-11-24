import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Suggested budget amount as a decimal-string value with its currency. */
export type Amount = {
  /** Decimal string, e.g. "1234.56". */
  amount?: string;
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const amountSchema: Schema<Amount> = s.object<Amount>(
  {
    amount: s.optional(s.string()),
    currency: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
