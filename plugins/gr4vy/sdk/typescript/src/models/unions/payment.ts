import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  wpayPaytoResourceOptionsSchema,
  type WpayPaytoResourceOptions,
} from "../wpay-payto-resource-options.js";

/** Options to pass to the `payment` resource in the Wpay PayTo API. */
export type Payment = WpayPaytoResourceOptions;

export const paymentSchema: Schema<Payment> = s.of<Payment>(
  s.union([s.lazy(() => wpayPaytoResourceOptionsSchema)]),
);
