import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Target number of outreach attempts per hour for this batch. When omitted, the batch inherits the
 * campaign's hourly_rate.
 */
export type CallRate = number;

export const callRateSchema: Schema<CallRate> = s.of<CallRate>(s.union([s.int()]));
