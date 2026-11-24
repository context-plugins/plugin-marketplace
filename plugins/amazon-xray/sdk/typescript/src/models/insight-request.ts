import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsightRequest = {
  /**
   * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
   */
  insightId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightRequestSchema: Schema<InsightRequest> = s.object<InsightRequest>(
  {
    insightId: s.string(),
    _keysMap: {
      insightId: "InsightId",
    },
  },
  { additionalProperties: s.json() },
);
