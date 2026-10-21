import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paypalOptionsSchema, type PaypalOptions } from "../paypal-options.js";

/** Custom options to be passed to the `paypal-paypal` connector. */
export type PaypalPaypal = PaypalOptions;

export const paypalPaypalSchema: Schema<PaypalPaypal> = s.of<PaypalPaypal>(
  s.union([s.lazy(() => paypalOptionsSchema)]),
);
