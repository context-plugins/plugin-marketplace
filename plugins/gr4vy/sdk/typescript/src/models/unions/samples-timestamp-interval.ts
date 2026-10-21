import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Timestamp interval for querying a subset of the metric samples. This parameter should be in the
 * format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the
 * duration only format is not accepted. Start and end are either a datetime in ISO 8601 format or a
 * placeholder which is one of the following: `now`, `hour_start` and `hour_end`.
 */
export type SamplesTimestampInterval = string;

export const samplesTimestampIntervalSchema: Schema<SamplesTimestampInterval> =
  s.of<SamplesTimestampInterval>(s.union([s.string()]));
