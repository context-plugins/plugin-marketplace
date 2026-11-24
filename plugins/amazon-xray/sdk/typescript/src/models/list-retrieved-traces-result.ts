import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { retrievalStatusSchema, type RetrievalStatus } from "./retrieval-status.js";
import { retrievedTraceSchema, type RetrievedTrace } from "./retrieved-trace.js";
import { traceFormatSchema, type TraceFormat } from "./trace-format.js";

export type ListRetrievedTracesResult = {
  /** Status of the retrieval. */
  retrievalStatus?: RetrievalStatus;
  /** Format of the requested traces. */
  traceFormat?: TraceFormat;
  /** Full traces for the specified requests. */
  traces?: RetrievedTrace[];
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * indexes.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listRetrievedTracesResultSchema: Schema<ListRetrievedTracesResult> =
  s.object<ListRetrievedTracesResult>(
    {
      retrievalStatus: s.optional(s.lazy(() => retrievalStatusSchema)),
      traceFormat: s.optional(s.lazy(() => traceFormatSchema)),
      traces: s.optional(s.array(s.lazy(() => retrievedTraceSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        retrievalStatus: "RetrievalStatus",
        traceFormat: "TraceFormat",
        traces: "Traces",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
