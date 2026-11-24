import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TracesRequest = {
  /** Specify the trace IDs of requests for which to retrieve segments. */
  traceIds: string[];
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tracesRequestSchema: Schema<TracesRequest> = s.object<TracesRequest>(
  {
    traceIds: s.array(s.string()),
    nextToken: s.optional(s.string()),
    _keysMap: {
      traceIds: "TraceIds",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
