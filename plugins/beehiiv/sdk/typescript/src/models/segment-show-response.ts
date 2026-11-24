import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { segmentSchema, type Segment } from "./segment.js";

export type SegmentShowResponse = {
  /** The segment object. To expand results, see the results endpoint. */
  data: Segment;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentShowResponseSchema: Schema<SegmentShowResponse> = s.object<SegmentShowResponse>(
  {
    data: segmentSchema,
  },
  { additionalProperties: s.json() },
);
