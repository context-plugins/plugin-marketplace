import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-giropay` connector. */
export type AdyenGiropay = AdyenOptions;

export const adyenGiropaySchema: Schema<AdyenGiropay> = s.of<AdyenGiropay>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
