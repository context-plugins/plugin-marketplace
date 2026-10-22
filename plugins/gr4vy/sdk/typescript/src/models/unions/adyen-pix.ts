import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenPixOptionsSchema, type AdyenPixOptions } from "../adyen-pix-options.js";

/** Custom options to be passed to the `adyen-pix` connector. */
export type AdyenPix = AdyenPixOptions;

export const adyenPixSchema: Schema<AdyenPix> = s.of<AdyenPix>(
  s.union([s.lazy(() => adyenPixOptionsSchema)]),
);
