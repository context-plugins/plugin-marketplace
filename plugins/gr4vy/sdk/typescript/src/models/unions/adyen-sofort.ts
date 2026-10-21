import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-sofort` connector. */
export type AdyenSofort = AdyenOptions;

export const adyenSofortSchema: Schema<AdyenSofort> = s.of<AdyenSofort>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
