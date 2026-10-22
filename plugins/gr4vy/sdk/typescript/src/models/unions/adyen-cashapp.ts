import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-cashapp` connector. */
export type AdyenCashapp = AdyenOptions;

export const adyenCashappSchema: Schema<AdyenCashapp> = s.of<AdyenCashapp>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
