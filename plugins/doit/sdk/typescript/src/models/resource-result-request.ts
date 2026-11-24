import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultTypeSchema, type ResultType } from "./result-type.js";
import { resultSchema, type Result } from "./result.js";

/**
 * A single resource-level result for creating or updating an insight. Server-computed fields
 * (severity, resolved, enhancement) are not accepted here and will be ignored. Identity fields
 * (resourceId, resultType, account, cloudProvider) form the composite key. The fields location and
 * resource_type are set on creation only — any values provided for these fields during subsequent
 * upserts are silently ignored.
 */
export type ResourceResultRequest = {
  /** The cloud resource identifier. */
  resourceId: string;
  /**
   * What the resource actually is, e.g. for an EC2 resource ID, this field would be `instance`.
   * Immutable after creation — updates to this field are silently ignored.
   */
  resourceType?: string;
  /** Immutable after creation — updates to this field are silently ignored. */
  cloudProvider: string;
  /**
   * The cloud account or project ID containing this resource. Immutable after creation — updates to
   * this field are silently ignored.
   */
  account: string;
  /**
   * Represents the region/zone of the resource in AWS, or equivalent for other providers. Immutable
   * after creation — updates to this field are silently ignored.
   */
  location?: string;
  /** the external ID of the resource in the provider's system for the resource */
  externalId?: string;
  /** the URL to the resource-level issue in the provider's system */
  externalUrl?: string;
  /** contains any additional information for the resource results */
  metadata?: Record<string, unknown>;
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

export const resourceResultRequestSchema: Schema<ResourceResultRequest> = s.object<ResourceResultRequest>(
  {
    resourceId: s.string(),
    resourceType: s.optional(s.string()),
    cloudProvider: s.string(),
    account: s.string(),
    location: s.optional(s.string()),
    externalId: s.optional(s.string()),
    externalUrl: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    resultType: resultTypeSchema,
    result: s.optional(s.lazy(() => resultSchema)),
  },
  { additionalProperties: s.json() },
);
