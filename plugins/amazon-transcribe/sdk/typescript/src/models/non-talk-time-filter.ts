import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { absoluteTimeRangeSchema, type AbsoluteTimeRange } from "./absolute-time-range.js";
import { relativeTimeRangeSchema, type RelativeTimeRange } from "./relative-time-range.js";

export type NonTalkTimeFilter = {
  /**
   * Specify the duration, in milliseconds, of the period of silence that you want to flag. For
   * example, you can flag a silent period that lasts 30,000 milliseconds.
   */
  threshold?: number;
  absoluteTimeRange?: AbsoluteTimeRange;
  relativeTimeRange?: RelativeTimeRange;
  /** Set to TRUE to flag periods of speech. Set to FALSE to flag periods of silence */
  negate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nonTalkTimeFilterSchema: Schema<NonTalkTimeFilter> = s.object<NonTalkTimeFilter>(
  {
    threshold: s.optional(s.int()),
    absoluteTimeRange: s.optional(s.lazy(() => absoluteTimeRangeSchema)),
    relativeTimeRange: s.optional(s.lazy(() => relativeTimeRangeSchema)),
    negate: s.optional(s.boolean()),
    _keysMap: {
      threshold: "Threshold",
      absoluteTimeRange: "AbsoluteTimeRange",
      relativeTimeRange: "RelativeTimeRange",
      negate: "Negate",
    },
  },
  { additionalProperties: s.json() },
);
