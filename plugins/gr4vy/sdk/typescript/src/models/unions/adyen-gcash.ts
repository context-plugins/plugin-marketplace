import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-gcash` connector. */
export type AdyenGcash = AdyenOptions;

export const adyenGcashSchema: Schema<AdyenGcash> = s.of<AdyenGcash>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
