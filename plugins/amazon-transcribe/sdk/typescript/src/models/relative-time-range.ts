import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RelativeTimeRange = {
  /**
   * The time, in percentage, when Amazon Transcribe starts searching for the specified criteria in
   * your media file. If you include StartPercentage in your request, you must also include
   * EndPercentage.
   */
  startPercentage?: number;
  /**
   * The time, in percentage, when Amazon Transcribe stops searching for the specified criteria in
   * your media file. If you include EndPercentage in your request, you must also include
   * StartPercentage.
   */
  endPercentage?: number;
  /**
   * The time, in percentage, from the start of your media file until the specified value. Amazon
   * Transcribe searches for your specified criteria in this time segment.
   */
  first?: number;
  /**
   * The time, in percentage, from the specified value until the end of your media file. Amazon
   * Transcribe searches for your specified criteria in this time segment.
   */
  last?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relativeTimeRangeSchema: Schema<RelativeTimeRange> = s.object<RelativeTimeRange>(
  {
    startPercentage: s.optional(s.int()),
    endPercentage: s.optional(s.int()),
    first: s.optional(s.int()),
    last: s.optional(s.int()),
    _keysMap: {
      startPercentage: "StartPercentage",
      endPercentage: "EndPercentage",
      first: "First",
      last: "Last",
    },
  },
  { additionalProperties: s.json() },
);
