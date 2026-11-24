import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetRetrievedTracesGraphRequest = {
  /** Retrieval token. */
  retrievalToken: string;
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * indexes.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getRetrievedTracesGraphRequestSchema: Schema<GetRetrievedTracesGraphRequest> =
  s.object<GetRetrievedTracesGraphRequest>(
    {
      retrievalToken: s.string(),
      nextToken: s.optional(s.string()),
      _keysMap: {
        retrievalToken: "RetrievalToken",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
