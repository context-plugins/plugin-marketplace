import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-seveneleven` connector. */
export type AdyenSeveneleven = AdyenOptions;

export const adyenSevenelevenSchema: Schema<AdyenSeveneleven> = s.of<AdyenSeveneleven>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
