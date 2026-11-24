import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticsIntentNodeSummarySchema,
  type AnalyticsIntentNodeSummary,
} from "./analytics-intent-node-summary.js";

export type ListIntentPathsResponse = {
  /**
   * A list of objects, each of which contains information about a node in the intent path for which
   * you requested metrics.
   */
  nodeSummaries?: AnalyticsIntentNodeSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listIntentPathsResponseSchema: Schema<ListIntentPathsResponse> =
  s.object<ListIntentPathsResponse>(
    {
      nodeSummaries: s.optional(s.array(s.lazy(() => analyticsIntentNodeSummarySchema))),
    },
    { additionalProperties: s.json() },
  );
