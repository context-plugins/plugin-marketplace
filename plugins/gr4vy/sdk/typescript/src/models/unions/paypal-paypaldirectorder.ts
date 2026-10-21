import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paypalDirectOrderOptionsSchema,
  type PaypalDirectOrderOptions,
} from "../paypal-direct-order-options.js";

/** Custom options to be passed to the `paypal-paypaldirectorder` connector. */
export type PaypalPaypaldirectorder = PaypalDirectOrderOptions;

export const paypalPaypaldirectorderSchema: Schema<PaypalPaypaldirectorder> = s.of<PaypalPaypaldirectorder>(
  s.union([s.lazy(() => paypalDirectOrderOptionsSchema)]),
);
