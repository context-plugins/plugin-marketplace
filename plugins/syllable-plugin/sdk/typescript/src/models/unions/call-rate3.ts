import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Target number of outreach attempts per hour for this batch. Omitted leaves the current value
 * unchanged; a batch that has never set one inherits the campaign's hourly_rate.
 */
export type CallRate3 = number;

export const callRate3Schema: Schema<CallRate3> = s.of<CallRate3>(s.union([s.int()]));
