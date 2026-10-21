import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only transactions created before this ISO date-time string. The time zone
 * must be included. Ensure that the date-time string is URL encoded, e.g.
 * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
 */
export type CreatedAtLte = Date;

export const createdAtLteSchema: Schema<CreatedAtLte> = s.of<CreatedAtLte>(s.union([s.dateTime()]));
