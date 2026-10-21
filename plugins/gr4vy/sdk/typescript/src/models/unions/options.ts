import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paypalShippingOptionsItemSchema,
  type PaypalShippingOptionsItem,
} from "../paypal-shipping-options-item.js";

/**
 * Shipping options that the payee or merchant offers to the payer to ship or pick up their items.
 */
export type Options = PaypalShippingOptionsItem[];

export const optionsSchema: Schema<Options> = s.of<Options>(
  s.union([s.array(s.lazy(() => paypalShippingOptionsItemSchema))]),
);
