import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelSchema, type Label } from "./label.js";

export type LabelDetection = {
  /**
   * Time, in milliseconds from the start of the video, that the label was detected. Note that
   * Timestamp is not guaranteed to be accurate to the individual frame where the label first
   * appears.
   */
  timestamp?: number;
  label?: Label;
  /**
   * The time in milliseconds defining the start of the timeline segment containing a continuously
   * detected label.
   */
  startTimestampMillis?: number;
  /**
   * The time in milliseconds defining the end of the timeline segment containing a continuously
   * detected label.
   */
  endTimestampMillis?: number;
  /**
   * The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to
   * EndTimestampMillis.
   */
  durationMillis?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelDetectionSchema: Schema<LabelDetection> = s.object<LabelDetection>(
  {
    timestamp: s.optional(s.int()),
    label: s.optional(s.lazy(() => labelSchema)),
    startTimestampMillis: s.optional(s.int()),
    endTimestampMillis: s.optional(s.int()),
    durationMillis: s.optional(s.int()),
    _keysMap: {
      timestamp: "Timestamp",
      label: "Label",
      startTimestampMillis: "StartTimestampMillis",
      endTimestampMillis: "EndTimestampMillis",
      durationMillis: "DurationMillis",
    },
  },
  { additionalProperties: s.json() },
);
