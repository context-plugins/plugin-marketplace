import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  proactiveInsightSummaryAmazonDevOpsGuruOrganizationApiSchema,
  type ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApi,
} from "./proactive-insight-summary-amazon-dev-ops-guru-organization-api.js";
import {
  reactiveInsightSummaryAmazonDevOpsGuruOrganizationApiSchema,
  type ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApi,
} from "./reactive-insight-summary-amazon-dev-ops-guru-organization-api.js";

export type SearchOrganizationInsightsResponse = {
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services
   * account.
   */
  proactiveInsights?: ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApi[];
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services
   * account.
   */
  reactiveInsights?: ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApi[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchOrganizationInsightsResponseSchema: Schema<SearchOrganizationInsightsResponse> =
  s.object<SearchOrganizationInsightsResponse>(
    {
      proactiveInsights: s.optional(
        s.array(s.lazy(() => proactiveInsightSummaryAmazonDevOpsGuruOrganizationApiSchema)),
      ),
      reactiveInsights: s.optional(
        s.array(s.lazy(() => reactiveInsightSummaryAmazonDevOpsGuruOrganizationApiSchema)),
      ),
      nextToken: s.optional(s.string()),
      _keysMap: {
        proactiveInsights: "ProactiveInsights",
        reactiveInsights: "ReactiveInsights",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
