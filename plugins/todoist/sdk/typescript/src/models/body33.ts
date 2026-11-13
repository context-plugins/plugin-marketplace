import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body33 = {
  /** Amount to buy, in the currency's minor unit (1000 = $10.00). */
  amount: number;
  /** ISO currency code. */
  currency: string;
  /** URL Checkout returns the user to. */
  returnUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body33Schema: Schema<Body33> = s.object<Body33>(
  {
    amount: s.int(),
    currency: s.string(),
    returnUrl: s.string(),
    _keysMap: {
      returnUrl: "return_url",
    },
  },
  { additionalProperties: s.json() },
);
