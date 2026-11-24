import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightSummarySchema, type InsightSummary } from "./insight-summary.js";

export type GetInsightSummariesResult = {
  /**
   * The summary of each insight within the group matching the provided filters. The summary
   * contains the InsightID, start and end time, the root cause service, the root cause and client
   * impact statistics, the top anomalous services, and the status of the insight.
   */
  insightSummaries?: InsightSummary[];
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getInsightSummariesResultSchema: Schema<GetInsightSummariesResult> =
  s.object<GetInsightSummariesResult>(
    {
      insightSummaries: s.optional(s.array(s.lazy(() => insightSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        insightSummaries: "InsightSummaries",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
