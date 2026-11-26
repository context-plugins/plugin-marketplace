import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Funding = {
  /** Credit card funding rate */
  creditCardRate?: number;
  /** Debit card funding rate */
  debitCardRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingSchema: Schema<Funding> = s.object<Funding>(
  {
    creditCardRate: s.optional(s.float64()),
    debitCardRate: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
