import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The start of the time range for the rule in 24-hour format hh:mm (should be null for "all day"
 * cases)
 */
export type TimeRangeStart = string;

export const timeRangeStartSchema: Schema<TimeRangeStart> = s.of<TimeRangeStart>(s.union([s.string()]));
