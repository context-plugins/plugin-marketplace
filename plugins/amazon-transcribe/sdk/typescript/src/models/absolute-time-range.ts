import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AbsoluteTimeRange = {
  /**
   * The time, in milliseconds, when Amazon Transcribe starts searching for the specified criteria
   * in your audio. If you include StartTime in your request, you must also include EndTime.
   */
  startTime?: number;
  /**
   * The time, in milliseconds, when Amazon Transcribe stops searching for the specified criteria in
   * your audio. If you include EndTime in your request, you must also include StartTime.
   */
  endTime?: number;
  /**
   * The time, in milliseconds, from the start of your media file until the specified value. Amazon
   * Transcribe searches for your specified criteria in this time segment.
   */
  first?: number;
  /**
   * The time, in milliseconds, from the specified value until the end of your media file. Amazon
   * Transcribe searches for your specified criteria in this time segment.
   */
  last?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const absoluteTimeRangeSchema: Schema<AbsoluteTimeRange> = s.object<AbsoluteTimeRange>(
  {
    startTime: s.optional(s.int()),
    endTime: s.optional(s.int()),
    first: s.optional(s.int()),
    last: s.optional(s.int()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
      first: "First",
      last: "Last",
    },
  },
  { additionalProperties: s.json() },
);
