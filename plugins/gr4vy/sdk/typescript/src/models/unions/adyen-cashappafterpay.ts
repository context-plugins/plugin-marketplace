import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-cashappafterpay` connector. */
export type AdyenCashappafterpay = AdyenOptions;

export const adyenCashappafterpaySchema: Schema<AdyenCashappafterpay> = s.of<AdyenCashappafterpay>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
