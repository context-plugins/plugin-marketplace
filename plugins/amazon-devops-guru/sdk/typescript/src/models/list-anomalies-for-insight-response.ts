import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { proactiveAnomalySummarySchema, type ProactiveAnomalySummary } from "./proactive-anomaly-summary.js";
import { reactiveAnomalySummarySchema, type ReactiveAnomalySummary } from "./reactive-anomaly-summary.js";

export type ListAnomaliesForInsightResponse = {
  /** An array of ProactiveAnomalySummary objects that represent the requested anomalies */
  proactiveAnomalies?: ProactiveAnomalySummary[];
  /** An array of ReactiveAnomalySummary objects that represent the requested anomalies */
  reactiveAnomalies?: ReactiveAnomalySummary[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAnomaliesForInsightResponseSchema: Schema<ListAnomaliesForInsightResponse> =
  s.object<ListAnomaliesForInsightResponse>(
    {
      proactiveAnomalies: s.optional(s.array(s.lazy(() => proactiveAnomalySummarySchema))),
      reactiveAnomalies: s.optional(s.array(s.lazy(() => reactiveAnomalySummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        proactiveAnomalies: "ProactiveAnomalies",
        reactiveAnomalies: "ReactiveAnomalies",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
