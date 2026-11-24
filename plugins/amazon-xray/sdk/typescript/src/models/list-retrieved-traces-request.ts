import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { traceFormatSchema, type TraceFormat } from "./trace-format.js";

export type ListRetrievedTracesRequest = {
  /** Retrieval token. */
  retrievalToken: string;
  /** Format of the requested traces. */
  traceFormat?: TraceFormat;
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * indexes.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listRetrievedTracesRequestSchema: Schema<ListRetrievedTracesRequest> =
  s.object<ListRetrievedTracesRequest>(
    {
      retrievalToken: s.string(),
      traceFormat: s.optional(s.lazy(() => traceFormatSchema)),
      nextToken: s.optional(s.string()),
      _keysMap: {
        retrievalToken: "RetrievalToken",
        traceFormat: "TraceFormat",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
