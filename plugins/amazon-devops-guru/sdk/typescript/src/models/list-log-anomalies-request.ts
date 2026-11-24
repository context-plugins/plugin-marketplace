import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListLogAnomaliesRequest = {
  /** The ID of the insight containing the log groups. */
  insightId: string;
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results,
   * make another call with the returned nextToken value.
   */
  maxResults?: number;
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this
   * value is null, it retrieves the first page.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listLogAnomaliesRequestSchema: Schema<ListLogAnomaliesRequest> =
  s.object<ListLogAnomaliesRequest>(
    {
      insightId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        insightId: "InsightId",
        maxResults: "MaxResults",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
