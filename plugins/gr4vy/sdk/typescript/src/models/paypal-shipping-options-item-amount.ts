import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaypalShippingOptionsItemAmount = {
  /** The three-character ISO currency code. */
  currencyCode: string;
  /** The amount value, which might include a decimal portion. */
  value: string;
};

export const paypalShippingOptionsItemAmountSchema: Schema<PaypalShippingOptionsItemAmount> =
  s.object<PaypalShippingOptionsItemAmount>({
    currencyCode: s.string(),
    value: s.string(),
    _keysMap: {
      currencyCode: "currency_code",
    },
  });
