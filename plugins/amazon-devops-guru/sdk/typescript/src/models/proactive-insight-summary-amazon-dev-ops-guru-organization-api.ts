import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightTimeRangeSchema, type InsightTimeRange } from "./insight-time-range.js";
import { predictionTimeRangeSchema, type PredictionTimeRange } from "./prediction-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import {
  serviceCollectionAmazonDevOpsGuruOrganizationApiSchema,
  type ServiceCollectionAmazonDevOpsGuruOrganizationApi,
} from "./service-collection-amazon-dev-ops-guru-organization-api.js";
import { severity2Schema, type Severity2 } from "./severity2.js";
import { status2Schema, type Status2 } from "./status2.js";

export type ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApi = {
  /** The ID of the proactive insight. */
  id?: string;
  /** The name of the proactive insight. */
  name?: string;
  /**
   * The severity of the insight. For more information, see Understanding insight severities in the
   * Amazon DevOps Guru User Guide.
   */
  severity?: Severity2;
  /** The status of the proactive insight. */
  status?: Status2;
  insightTimeRange?: InsightTimeRange;
  predictionTimeRange?: PredictionTimeRange;
  resourceCollection?: ResourceCollection;
  serviceCollection?: ServiceCollectionAmazonDevOpsGuruOrganizationApi;
  /**
   * The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this
   * insight.
   */
  associatedResourceArns?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const proactiveInsightSummaryAmazonDevOpsGuruOrganizationApiSchema: Schema<ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApi> =
  s.object<ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      severity: s.optional(s.lazy(() => severity2Schema)),
      status: s.optional(s.lazy(() => status2Schema)),
      insightTimeRange: s.optional(s.lazy(() => insightTimeRangeSchema)),
      predictionTimeRange: s.optional(s.lazy(() => predictionTimeRangeSchema)),
      resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
      serviceCollection: s.optional(s.lazy(() => serviceCollectionAmazonDevOpsGuruOrganizationApiSchema)),
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
