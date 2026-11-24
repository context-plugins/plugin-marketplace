import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightTimeRangeSchema, type InsightTimeRange } from "./insight-time-range.js";
import { predictionTimeRangeSchema, type PredictionTimeRange } from "./prediction-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import {
  severityAmazonDevOpsGuruInsightsApiSchema,
  type SeverityAmazonDevOpsGuruInsightsApi,
} from "./severity-amazon-dev-ops-guru-insights-api.js";
import {
  statusAmazonDevOpsGuruInsightsApiSchema,
  type StatusAmazonDevOpsGuruInsightsApi,
} from "./status-amazon-dev-ops-guru-insights-api.js";

export type ProactiveInsight = {
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
  /**
   * The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must
   * enable the creation of OpstItems insights before they are created for each insight.
   */
  ssmOpsItemId?: string;
  /** Describes the proactive insight. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const proactiveInsightSchema: Schema<ProactiveInsight> = s.object<ProactiveInsight>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    severity: s.optional(s.lazy(() => severityAmazonDevOpsGuruInsightsApiSchema)),
    status: s.optional(s.lazy(() => statusAmazonDevOpsGuruInsightsApiSchema)),
    insightTimeRange: s.optional(s.lazy(() => insightTimeRangeSchema)),
    predictionTimeRange: s.optional(s.lazy(() => predictionTimeRangeSchema)),
    resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
    ssmOpsItemId: s.optional(s.string()),
    description: s.optional(s.string()),
    _keysMap: {
      id: "Id",
      name: "Name",
      severity: "Severity",
      status: "Status",
      insightTimeRange: "InsightTimeRange",
      predictionTimeRange: "PredictionTimeRange",
      resourceCollection: "ResourceCollection",
      ssmOpsItemId: "SsmOpsItemId",
      description: "Description",
    },
  },
  { additionalProperties: s.json() },
);
