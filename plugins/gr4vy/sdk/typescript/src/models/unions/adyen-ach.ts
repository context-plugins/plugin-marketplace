import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenOptionsSchema, type AdyenOptions } from "../adyen-options.js";

/** Custom options to be passed to the `adyen-ach` connector. */
export type AdyenAch = AdyenOptions;

export const adyenAchSchema: Schema<AdyenAch> = s.of<AdyenAch>(s.union([s.lazy(() => adyenOptionsSchema)]));
