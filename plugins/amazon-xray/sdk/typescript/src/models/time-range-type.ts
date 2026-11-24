import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Query trace summaries by TraceId (trace start time), Event (trace update time), or Service (trace
 * segment end time).
 */
export const TimeRangeType = {
  TraceId: "TraceId",
  Event: "Event",
  Service: "Service",
} as const;
export type TimeRangeType = (typeof TimeRangeType)[keyof typeof TimeRangeType] | (string & {});

export const timeRangeTypeSchema: EnumSchema<TimeRangeType> = s.enumOf<TimeRangeType>(TimeRangeType);
