import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Specifies the number of buckets to return.
 *
 *  - `bucket_width=1d`: default 7, max 31
 * - `bucket_width=12h`: default 2, max 14
 * - `bucket_width=6h`: default 4, max 28
 * - `bucket_width=1h`: default 24, max 168
 * - `bucket_width=45m`: default 2, max 32
 * - `bucket_width=30m`: default 2, max 48
 * - `bucket_width=15m`: default 4, max 96
 * - `bucket_width=5m`: default 12, max 288
 */
export type Limit2 = number;

export const limit2Schema: Schema<Limit2> = s.of<Limit2>(s.union([s.int()]));
