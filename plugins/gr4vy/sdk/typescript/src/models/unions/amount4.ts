import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paypalShippingOptionsItemAmountSchema,
  type PaypalShippingOptionsItemAmount,
} from "../paypal-shipping-options-item-amount.js";

/** The shipping cost for the selected option. */
export type Amount4 = PaypalShippingOptionsItemAmount;

export const amount4Schema: Schema<Amount4> = s.of<Amount4>(
  s.union([s.lazy(() => paypalShippingOptionsItemAmountSchema)]),
);
