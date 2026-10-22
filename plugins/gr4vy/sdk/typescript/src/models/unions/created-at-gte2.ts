import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only payouts created after this ISO date-time string. The time zone must
 * be included. Ensure that the date-time string is URL encoded, e.g. `2022-01-01T12:00:00+08:00`
 * must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
 */
export type CreatedAtGte2 = Date;

export const createdAtGte2Schema: Schema<CreatedAtGte2> = s.of<CreatedAtGte2>(s.union([s.dateTime()]));
