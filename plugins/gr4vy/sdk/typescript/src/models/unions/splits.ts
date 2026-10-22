import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenSplitsOptionsSchema, type AdyenSplitsOptions } from "../adyen-splits-options.js";

/** Passes information of splitting payment amounts to the Adyen API. */
export type Splits = AdyenSplitsOptions;

export const splitsSchema: Schema<Splits> = s.of<Splits>(s.union([s.lazy(() => adyenSplitsOptionsSchema)]));
