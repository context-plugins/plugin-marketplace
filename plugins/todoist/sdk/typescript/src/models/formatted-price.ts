import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FormattedPrice = {
  /** ISO 4217 currency code. */
  currency: string;
  /** Price amount in the currency's smallest unit. */
  unitAmount: number;
  /** Tax behavior for the price. */
  taxBehavior: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formattedPriceSchema: Schema<FormattedPrice> = s.object<FormattedPrice>(
  {
    currency: s.string(),
    unitAmount: s.int(),
    taxBehavior: s.string(),
    _keysMap: {
      unitAmount: "unit_amount",
      taxBehavior: "tax_behavior",
    },
  },
  { additionalProperties: s.json() },
);
