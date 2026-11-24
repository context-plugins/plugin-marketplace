import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { traceSchema, type Trace } from "./trace.js";

export type BatchGetTracesResult = {
  /** Full traces for the specified requests. */
  traces?: Trace[];
  /** Trace IDs of requests that haven't been processed. */
  unprocessedTraceIds?: string[];
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetTracesResultSchema: Schema<BatchGetTracesResult> = s.object<BatchGetTracesResult>(
  {
    traces: s.optional(s.array(s.lazy(() => traceSchema))),
    unprocessedTraceIds: s.optional(s.array(s.string())),
    nextToken: s.optional(s.string()),
    _keysMap: {
      traces: "Traces",
      unprocessedTraceIds: "UnprocessedTraceIds",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
