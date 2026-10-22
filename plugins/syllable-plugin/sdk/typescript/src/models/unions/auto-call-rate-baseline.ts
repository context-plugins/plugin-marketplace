import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Read-only. The auto-paced rate first computed for this batch, set on its first dialing cycle.
 * Subsequent cycles hold the rate within +/- 20% of it. Null until the batch has dialed, or when
 * auto_call_rate is off.
 */
export type AutoCallRateBaseline = number;

export const autoCallRateBaselineSchema: Schema<AutoCallRateBaseline> = s.of<AutoCallRateBaseline>(
  s.union([s.float64()]),
);
