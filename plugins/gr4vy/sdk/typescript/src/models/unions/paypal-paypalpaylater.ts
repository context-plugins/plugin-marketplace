import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paypalOptionsSchema, type PaypalOptions } from "../paypal-options.js";

/** Custom options to be passed to the `paypal-paypalpaylater` connector. */
export type PaypalPaypalpaylater = PaypalOptions;

export const paypalPaypalpaylaterSchema: Schema<PaypalPaypalpaylater> = s.of<PaypalPaypalpaylater>(
  s.union([s.lazy(() => paypalOptionsSchema)]),
);
