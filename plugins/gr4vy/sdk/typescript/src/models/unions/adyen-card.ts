import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenCardOptionsSchema, type AdyenCardOptions } from "../adyen-card-options.js";

/** Custom options to be passed to the `adyen-card` connector. */
export type AdyenCard = AdyenCardOptions;

export const adyenCardSchema: Schema<AdyenCard> = s.of<AdyenCard>(
  s.union([s.lazy(() => adyenCardOptionsSchema)]),
);
