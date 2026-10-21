import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Pace this batch automatically to finish before expires_on. Omitted leaves the current setting
 * unchanged. Enabling it requires the batch to have an expires_on, either already set or supplied
 * in the same update.
 */
export type AutoCallRate = boolean;

export const autoCallRateSchema: Schema<AutoCallRate> = s.of<AutoCallRate>(s.union([s.boolean()]));
