import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spanSchema, type Span } from "./span.js";

export type RetrievedTrace = {
  /** The unique identifier for the span. */
  id?: string;
  /**
   * The length of time in seconds between the start time of the root span and the end time of the
   * last span that completed.
   */
  duration?: number;
  /** Spans that comprise the trace. */
  spans?: Span[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retrievedTraceSchema: Schema<RetrievedTrace> = s.object<RetrievedTrace>(
  {
    id: s.optional(s.string()),
    duration: s.optional(s.float64()),
    spans: s.optional(s.array(s.lazy(() => spanSchema))),
    _keysMap: {
      id: "Id",
      duration: "Duration",
      spans: "Spans",
    },
  },
  { additionalProperties: s.json() },
);
