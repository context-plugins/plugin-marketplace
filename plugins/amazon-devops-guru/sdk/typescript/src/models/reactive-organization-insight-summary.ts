import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightTimeRangeSchema, type InsightTimeRange } from "./insight-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import {
  serviceCollectionAmazonDevOpsGuruOrganizationApiSchema,
  type ServiceCollectionAmazonDevOpsGuruOrganizationApi,
} from "./service-collection-amazon-dev-ops-guru-organization-api.js";
import {
  severityAmazonDevOpsGuruOrganizationApiSchema,
  type SeverityAmazonDevOpsGuruOrganizationApi,
} from "./severity-amazon-dev-ops-guru-organization-api.js";
import {
  statusAmazonDevOpsGuruOrganizationApiSchema,
  type StatusAmazonDevOpsGuruOrganizationApi,
} from "./status-amazon-dev-ops-guru-organization-api.js";

export type ReactiveOrganizationInsightSummary = {
  /** The ID of the insight summary. */
  id?: string;
  /** The ID of the Amazon Web Services account. */
  accountId?: string;
  /** The ID of the organizational unit. */
  organizationalUnitId?: string;
  /** The name of the insight summary. */
  name?: string;
  /**
   * An array of severity values used to search for insights. For more information, see
   * Understanding insight severities in the Amazon DevOps Guru User Guide.
   */
  severity?: SeverityAmazonDevOpsGuruOrganizationApi;
  /** An array of status values used to search for insights. */
  status?: StatusAmazonDevOpsGuruOrganizationApi;
  insightTimeRange?: InsightTimeRange;
  resourceCollection?: ResourceCollection;
  serviceCollection?: ServiceCollectionAmazonDevOpsGuruOrganizationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactiveOrganizationInsightSummarySchema: Schema<ReactiveOrganizationInsightSummary> =
  s.object<ReactiveOrganizationInsightSummary>(
    {
      id: s.optional(s.string()),
      accountId: s.optional(s.string()),
      organizationalUnitId: s.optional(s.string()),
      name: s.optional(s.string()),
      severity: s.optional(s.lazy(() => severityAmazonDevOpsGuruOrganizationApiSchema)),
      status: s.optional(s.lazy(() => statusAmazonDevOpsGuruOrganizationApiSchema)),
      insightTimeRange: s.optional(s.lazy(() => insightTimeRangeSchema)),
      resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
      serviceCollection: s.optional(s.lazy(() => serviceCollectionAmazonDevOpsGuruOrganizationApiSchema)),
      _keysMap: {
        id: "Id",
        accountId: "AccountId",
        organizationalUnitId: "OrganizationalUnitId",
        name: "Name",
        severity: "Severity",
        status: "Status",
        insightTimeRange: "InsightTimeRange",
        resourceCollection: "ResourceCollection",
        serviceCollection: "ServiceCollection",
      },
    },
    { additionalProperties: s.json() },
  );
