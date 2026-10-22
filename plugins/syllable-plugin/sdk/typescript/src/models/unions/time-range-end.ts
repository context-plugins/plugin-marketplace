import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The end of the time range for the rule in 24-hour format hh:mm (should be null for "all day"
 * cases)
 */
export type TimeRangeEnd = string;

export const timeRangeEndSchema: Schema<TimeRangeEnd> = s.of<TimeRangeEnd>(s.union([s.string()]));
