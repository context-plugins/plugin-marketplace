import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-ideal` connector. */
export type AdyenIdeal = AdyenOptions;

export const adyenIdealSchema: Schema<AdyenIdeal> = s.of<AdyenIdeal>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
