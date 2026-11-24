import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import {
  serviceCollectionAmazonDevOpsGuruOrganizationApiSchema,
  type ServiceCollectionAmazonDevOpsGuruOrganizationApi,
} from "./service-collection-amazon-dev-ops-guru-organization-api.js";
import { severity4Schema, type Severity4 } from "./severity4.js";
import { status4Schema, type Status4 } from "./status4.js";

export type SearchOrganizationInsightsFilters = {
  /** An array of severity values used to search for insights. */
  severities?: Severity4[];
  /** An array of status values used to search for insights. */
  statuses?: Status4[];
  resourceCollection?: ResourceCollection;
  serviceCollection?: ServiceCollectionAmazonDevOpsGuruOrganizationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchOrganizationInsightsFiltersSchema: Schema<SearchOrganizationInsightsFilters> =
  s.object<SearchOrganizationInsightsFilters>(
    {
      severities: s.optional(s.array(s.lazy(() => severity4Schema))),
      statuses: s.optional(s.array(s.lazy(() => status4Schema))),
      resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
      serviceCollection: s.optional(s.lazy(() => serviceCollectionAmazonDevOpsGuruOrganizationApiSchema)),
      _keysMap: {
        severities: "Severities",
        statuses: "Statuses",
        resourceCollection: "ResourceCollection",
        serviceCollection: "ServiceCollection",
      },
    },
    { additionalProperties: s.json() },
  );
