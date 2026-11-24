import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MinSoldPrice = {
  amount?: string;
  currency?: string;
  display?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const minSoldPriceSchema: Schema<MinSoldPrice> = s.object<MinSoldPrice>(
  {
    amount: s.optional(s.string()),
    currency: s.optional(s.string()),
    display: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
