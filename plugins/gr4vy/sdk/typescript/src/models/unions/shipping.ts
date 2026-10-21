import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paypalShippingOptionsSchema, type PaypalShippingOptions } from "../paypal-shipping-options.js";

/** Shipping information to be passed to the PayPal API. */
export type Shipping = PaypalShippingOptions;

export const shippingSchema: Schema<Shipping> = s.of<Shipping>(
  s.union([s.lazy(() => paypalShippingOptionsSchema)]),
);
