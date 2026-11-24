import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  proactiveOrganizationInsightSummarySchema,
  type ProactiveOrganizationInsightSummary,
} from "./proactive-organization-insight-summary.js";
import {
  reactiveOrganizationInsightSummarySchema,
  type ReactiveOrganizationInsightSummary,
} from "./reactive-organization-insight-summary.js";

export type ListOrganizationInsightsResponse = {
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services
   * account.
   */
  proactiveInsights?: ProactiveOrganizationInsightSummary[];
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services
   * account.
   */
  reactiveInsights?: ReactiveOrganizationInsightSummary[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listOrganizationInsightsResponseSchema: Schema<ListOrganizationInsightsResponse> =
  s.object<ListOrganizationInsightsResponse>(
    {
      proactiveInsights: s.optional(s.array(s.lazy(() => proactiveOrganizationInsightSummarySchema))),
      reactiveInsights: s.optional(s.array(s.lazy(() => reactiveOrganizationInsightSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        proactiveInsights: "ProactiveInsights",
        reactiveInsights: "ReactiveInsights",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
