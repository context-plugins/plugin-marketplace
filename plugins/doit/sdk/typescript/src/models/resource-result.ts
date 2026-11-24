import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resourceResultEnhancementSchema,
  type ResourceResultEnhancement,
} from "./resource-result-enhancement.js";
import { resultTypeSchema, type ResultType } from "./result-type.js";
import { resultSchema, type Result } from "./result.js";
import { severityDoiTInsightsApiSchema, type SeverityDoiTInsightsApi } from "./severity-doi-tinsights-api.js";

/** A single resource-level result within an insight, as returned in API responses. */
export type ResourceResult = {
  /** The cloud resource identifier. */
  resourceId: string;
  /** What the resource actually is, eg. for an EC2 resource ID, this field would be `instance` */
  resourceType?: string;
  /** The cloud provider associated with the resource. */
  cloudProvider: string;
  /** The cloud account or project ID containing this resource. */
  account: string;
  /** represents the region/zone of the resource in AWS, or equivalent for other providers */
  location?: string;
  /** Whether this resource-level issue has been resolved. Computed server-side. */
  resolved?: boolean;
  /** The severity level of the finding. Computed server-side from the security risk counts. */
  severity?: SeverityDoiTInsightsApi;
  /** the external ID of the resource in the provider's system for the resource */
  externalId?: string;
  /** the URL to the resource-level issue in the provider's system */
  externalUrl?: string;
  /** contains any additional information for the resource results */
  metadata?: Record<string, unknown>;
  /** DoiT-managed metadata associated with a resource result. */
  enhancement?: ResourceResultEnhancement;
  /**
   * The discriminator property that determines which fields are populated in the 'result' object.
   */
  resultType: ResultType;
  /**
   * The result data for this resource. Which fields are populated depends on the resultType. For
   * security_risk: critical, high, medium, low. For potential_daily_savings: value. For
   * potential_daily_savings_with_recommendation: value, current, recommendation. For
   * potential_daily_savings_with_cluster_agent: value, agentInstalled.
   */
  result?: Result;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceResultSchema: Schema<ResourceResult> = s.object<ResourceResult>(
  {
    resourceId: s.string(),
    resourceType: s.optional(s.string()),
    cloudProvider: s.string(),
    account: s.string(),
    location: s.optional(s.string()),
    resolved: s.optional(s.boolean()),
    severity: s.optional(s.lazy(() => severityDoiTInsightsApiSchema)),
    externalId: s.optional(s.string()),
    externalUrl: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    enhancement: s.optional(s.lazy(() => resourceResultEnhancementSchema)),
    resultType: resultTypeSchema,
    result: s.optional(s.lazy(() => resultSchema)),
  },
  { additionalProperties: s.json() },
);
