import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightTimeRangeSchema, type InsightTimeRange } from "./insight-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import {
  serviceCollectionAmazonDevOpsGuruOrganizationApiSchema,
  type ServiceCollectionAmazonDevOpsGuruOrganizationApi,
} from "./service-collection-amazon-dev-ops-guru-organization-api.js";
import { severity2Schema, type Severity2 } from "./severity2.js";
import {
  status3AmazonDevOpsGuruOrganizationApiSchema,
  type Status3AmazonDevOpsGuruOrganizationApi,
} from "./status3-amazon-dev-ops-guru-organization-api.js";

export type ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApi = {
  /** The ID of a reactive summary. */
  id?: string;
  /** The name of a reactive insight. */
  name?: string;
  /**
   * The severity of the insight. For more information, see Understanding insight severities in the
   * Amazon DevOps Guru User Guide.
   */
  severity?: Severity2;
  /** The status of a reactive insight. */
  status?: Status3AmazonDevOpsGuruOrganizationApi;
  insightTimeRange?: InsightTimeRange;
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

export const reactiveInsightSummaryAmazonDevOpsGuruOrganizationApiSchema: Schema<ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApi> =
  s.object<ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      severity: s.optional(s.lazy(() => severity2Schema)),
      status: s.optional(s.lazy(() => status3AmazonDevOpsGuruOrganizationApiSchema)),
      insightTimeRange: s.optional(s.lazy(() => insightTimeRangeSchema)),
      resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
      serviceCollection: s.optional(s.lazy(() => serviceCollectionAmazonDevOpsGuruOrganizationApiSchema)),
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
