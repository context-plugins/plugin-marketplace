import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-alipay` connector. */
export type AdyenAlipay = AdyenOptions;

export const adyenAlipaySchema: Schema<AdyenAlipay> = s.of<AdyenAlipay>(
  s.union([s.lazy(() => adyenOptionsSchema)]),
);
