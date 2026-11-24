import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightTimeRangeSchema, type InsightTimeRange } from "./insight-time-range.js";
import { predictionTimeRangeSchema, type PredictionTimeRange } from "./prediction-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import { serviceCollectionSchema, type ServiceCollection } from "./service-collection.js";
import {
  severityAmazonDevOpsGuruInsightsApiSchema,
  type SeverityAmazonDevOpsGuruInsightsApi,
} from "./severity-amazon-dev-ops-guru-insights-api.js";
import {
  statusAmazonDevOpsGuruInsightsApiSchema,
  type StatusAmazonDevOpsGuruInsightsApi,
} from "./status-amazon-dev-ops-guru-insights-api.js";

export type ProactiveInsightSummary = {
  /** The ID of the proactive insight. */
  id?: string;
  /** The name of the proactive insight. */
  name?: string;
  /**
   * The severity of the insight. For more information, see Understanding insight severities in the
   * Amazon DevOps Guru User Guide.
   */
  severity?: SeverityAmazonDevOpsGuruInsightsApi;
  /** The status of the proactive insight. */
  status?: StatusAmazonDevOpsGuruInsightsApi;
  insightTimeRange?: InsightTimeRange;
  predictionTimeRange?: PredictionTimeRange;
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

export const proactiveInsightSummarySchema: Schema<ProactiveInsightSummary> =
  s.object<ProactiveInsightSummary>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      severity: s.optional(s.lazy(() => severityAmazonDevOpsGuruInsightsApiSchema)),
      status: s.optional(s.lazy(() => statusAmazonDevOpsGuruInsightsApiSchema)),
      insightTimeRange: s.optional(s.lazy(() => insightTimeRangeSchema)),
      predictionTimeRange: s.optional(s.lazy(() => predictionTimeRangeSchema)),
      resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
      serviceCollection: s.optional(s.lazy(() => serviceCollectionSchema)),
      associatedResourceArns: s.optional(s.array(s.string())),
      _keysMap: {
        id: "Id",
        name: "Name",
        severity: "Severity",
        status: "Status",
        insightTimeRange: "InsightTimeRange",
        predictionTimeRange: "PredictionTimeRange",
        resourceCollection: "ResourceCollection",
        serviceCollection: "ServiceCollection",
        associatedResourceArns: "AssociatedResourceArns",
      },
    },
    { additionalProperties: s.json() },
  );
