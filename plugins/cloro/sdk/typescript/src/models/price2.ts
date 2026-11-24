import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Offer price. Omitted when the displayed text can't be parsed. */
export type Price2 = {
  /** Parsed numeric price. On installment offers, the monthly payment. */
  value: number;
  /** ISO 4217 code, or the displayed token when it maps to none */
  currency: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const price2Schema: Schema<Price2> = s.object<Price2>(
  {
    value: s.float64(),
    currency: s.string(),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
