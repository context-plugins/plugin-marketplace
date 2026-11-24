import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsightEventsRequest = {
  /**
   * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
   */
  insightId: string;
  /** Used to retrieve at most the specified value of events. */
  maxResults?: number;
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * events.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightEventsRequestSchema: Schema<InsightEventsRequest> = s.object<InsightEventsRequest>(
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
