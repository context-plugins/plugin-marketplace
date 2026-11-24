import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timestampRangeSchema, type TimestampRange } from "./timestamp-range.js";

export type PointsOfInterest = {
  /**
   * Contains the timestamp ranges (start time through end time) of matched categories and rules.
   */
  timestampRanges?: TimestampRange[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pointsOfInterestSchema: Schema<PointsOfInterest> = s.object<PointsOfInterest>(
  {
    timestampRanges: s.optional(s.array(s.lazy(() => timestampRangeSchema))),
    _keysMap: {
      timestampRanges: "TimestampRanges",
    },
  },
  { additionalProperties: s.json() },
);
