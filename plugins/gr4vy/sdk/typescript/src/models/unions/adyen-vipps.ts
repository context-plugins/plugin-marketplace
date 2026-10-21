import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-vipps` connector. */
export type AdyenVipps = AdyenOptions;

export const adyenVippsSchema: Schema<AdyenVipps> = s.of<AdyenVipps>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
