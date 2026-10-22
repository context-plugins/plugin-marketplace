import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the incidents to those that were created within the specified interval. This parameter
 * should be in the format of [ISO 8601
 * interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only format
 * is not accepted. Start and end are either a datetime in ISO 8601 format or a placeholder which is
 * one of the following: `now`, `hour_start` and `hour_end`.
 */
export type TimestampInterval = string;

export const timestampIntervalSchema: Schema<TimestampInterval> = s.of<TimestampInterval>(
  s.union([s.string()]),
);
