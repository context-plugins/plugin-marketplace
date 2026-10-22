import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-konbini` connector. */
export type AdyenKonbini = AdyenOptions;

export const adyenKonbiniSchema: Schema<AdyenKonbini> = s.of<AdyenKonbini>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
