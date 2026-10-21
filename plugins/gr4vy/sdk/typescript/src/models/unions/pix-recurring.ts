import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  adyenPixRecurringOptionsSchema,
  type AdyenPixRecurringOptions,
} from "../adyen-pix-recurring-options.js";

/** Passes `pixRecurring` data to Adyen */
export type PixRecurring = AdyenPixRecurringOptions;

export const pixRecurringSchema: Schema<PixRecurring> = s.of<PixRecurring>(
  s.union([s.lazy(() => adyenPixRecurringOptionsSchema)]),
);
