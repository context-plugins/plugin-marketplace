import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-paypay` connector. */
export type AdyenPaypay = AdyenOptions;

export const adyenPaypaySchema: Schema<AdyenPaypay> = s.of<AdyenPaypay>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
