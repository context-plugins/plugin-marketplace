import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { unprocessedTraceSegmentSchema, type UnprocessedTraceSegment } from "./unprocessed-trace-segment.js";

export type PutTraceSegmentsResult = {
  /** Segments that failed processing. */
  unprocessedTraceSegments?: UnprocessedTraceSegment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putTraceSegmentsResultSchema: Schema<PutTraceSegmentsResult> = s.object<PutTraceSegmentsResult>(
  {
    unprocessedTraceSegments: s.optional(s.array(s.lazy(() => unprocessedTraceSegmentSchema))),
    _keysMap: {
      unprocessedTraceSegments: "UnprocessedTraceSegments",
    },
  },
  { additionalProperties: s.json() },
);
