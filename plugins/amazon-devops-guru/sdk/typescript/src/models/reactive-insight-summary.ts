import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightTimeRangeSchema, type InsightTimeRange } from "./insight-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import { serviceCollectionSchema, type ServiceCollection } from "./service-collection.js";
import {
  severityAmazonDevOpsGuruInsightsApiSchema,
  type SeverityAmazonDevOpsGuruInsightsApi,
} from "./severity-amazon-dev-ops-guru-insights-api.js";
import {
  status1AmazonDevOpsGuruInsightsApiSchema,
  type Status1AmazonDevOpsGuruInsightsApi,
} from "./status1-amazon-dev-ops-guru-insights-api.js";

export type ReactiveInsightSummary = {
  /** The ID of a reactive summary. */
  id?: string;
  /** The name of a reactive insight. */
  name?: string;
  /**
   * The severity of the insight. For more information, see Understanding insight severities in the
   * Amazon DevOps Guru User Guide.
   */
  severity?: SeverityAmazonDevOpsGuruInsightsApi;
  /** The status of a reactive insight. */
  status?: Status1AmazonDevOpsGuruInsightsApi;
  insightTimeRange?: InsightTimeRange;
  resourceCollection?: ResourceCollection;
  serviceCollection?: ServiceCollection;
  /**
   * The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this
   * insight.
   */
  associatedResourceArns?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactiveInsightSummarySchema: Schema<ReactiveInsightSummary> = s.object<ReactiveInsightSummary>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    severity: s.optional(s.lazy(() => severityAmazonDevOpsGuruInsightsApiSchema)),
    status: s.optional(s.lazy(() => status1AmazonDevOpsGuruInsightsApiSchema)),
    insightTimeRange: s.optional(s.lazy(() => insightTimeRangeSchema)),
    resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
    serviceCollection: s.optional(s.lazy(() => serviceCollectionSchema)),
    associatedResourceArns: s.optional(s.array(s.string())),
    _keysMap: {
      id: "Id",
      name: "Name",
      severity: "Severity",
      status: "Status",
      insightTimeRange: "InsightTimeRange",
      resourceCollection: "ResourceCollection",
      serviceCollection: "ServiceCollection",
      associatedResourceArns: "AssociatedResourceArns",
    },
  },
  { additionalProperties: s.json() },
);
