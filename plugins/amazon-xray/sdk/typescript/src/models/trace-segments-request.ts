import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TraceSegmentsRequest = {
  /** A string containing a JSON document defining one or more segments or subsegments. */
  traceSegmentDocuments: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceSegmentsRequestSchema: Schema<TraceSegmentsRequest> = s.object<TraceSegmentsRequest>(
  {
    traceSegmentDocuments: s.array(s.string()),
    _keysMap: {
      traceSegmentDocuments: "TraceSegmentDocuments",
    },
  },
  { additionalProperties: s.json() },
);
