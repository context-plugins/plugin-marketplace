import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsightImpactGraphRequest = {
  /**
   * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
   */
  insightId: string;
  /**
   * The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of
   * the value provided and can't be more than 30 days old.
   */
  startTime: Date;
  /**
   * The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the
   * value provided. The time range between the start time and end time can't be more than six
   * hours.
   */
  endTime: Date;
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightImpactGraphRequestSchema: Schema<InsightImpactGraphRequest> =
  s.object<InsightImpactGraphRequest>(
    {
      insightId: s.string(),
      startTime: s.dateTime(),
      endTime: s.dateTime(),
      nextToken: s.optional(s.string()),
      _keysMap: {
        insightId: "InsightId",
        startTime: "StartTime",
        endTime: "EndTime",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
