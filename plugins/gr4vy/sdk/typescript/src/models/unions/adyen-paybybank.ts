import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-paybybank` connector. */
export type AdyenPaybybank = AdyenOptions;

export const adyenPaybybankSchema: Schema<AdyenPaybybank> = s.of<AdyenPaybybank>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
