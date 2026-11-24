import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { segmentSchema, type Segment } from "./segment.js";

export type Trace = {
  /** The unique identifier for the request that generated the trace's segments and subsegments. */
  id?: string;
  /**
   * The length of time in seconds between the start time of the earliest segment that started and
   * the end time of the last segment that completed.
   */
  duration?: number;
  /**
   * LimitExceeded is set to true when the trace has exceeded the Trace document size limit. For
   * more information about this limit and other X-Ray limits and quotas, see Amazon Web Services
   * X-Ray endpoints and quotas.
   */
  limitExceeded?: boolean;
  /** Segment documents for the segments and subsegments that comprise the trace. */
  segments?: Segment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceSchema: Schema<Trace> = s.object<Trace>(
  {
    id: s.optional(s.string()),
    duration: s.optional(s.float64()),
    limitExceeded: s.optional(s.boolean()),
    segments: s.optional(s.array(s.lazy(() => segmentSchema))),
    _keysMap: {
      id: "Id",
      duration: "Duration",
      limitExceeded: "LimitExceeded",
      segments: "Segments",
    },
  },
  { additionalProperties: s.json() },
);
