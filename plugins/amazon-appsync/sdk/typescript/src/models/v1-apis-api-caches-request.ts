import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiCachingBehaviorSchema, type ApiCachingBehavior } from "./api-caching-behavior.js";
import { healthMetricsConfigSchema, type HealthMetricsConfig } from "./health-metrics-config.js";
import { typeSchema, type Type } from "./type.js";

export type V1ApisApiCachesRequest = {
  /** TTL in seconds for cache entries. Valid values are 1–3,600 seconds. */
  ttl: number;
  /**
   * Transit encryption flag when connecting to cache. You cannot update this setting after
   * creation.
   */
  transitEncryptionEnabled?: boolean;
  /** At-rest encryption flag for cache. You cannot update this setting after creation. */
  atRestEncryptionEnabled?: boolean;
  /**
   * Caching behavior. FULL_REQUEST_CACHING: All requests from the same user are cached. Individual
   * resolvers are automatically cached. All API calls will try to return responses from the cache.
   * PER_RESOLVER_CACHING: Individual resolvers that you specify are cached.
   * OPERATION_LEVEL_CACHING: Full requests are cached together and returned without executing
   * resolvers.
   */
  apiCachingBehavior: ApiCachingBehavior;
  /**
   * The cache instance type. Valid values are SMALL MEDIUM LARGE XLARGE LARGE_2X LARGE_4X LARGE_8X
   * (not available in all regions) LARGE_12X Historically, instance types were identified by an
   * EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should
   * be used. The following legacy instance types are available, but their use is discouraged:
   * T2_SMALL: A t2.small instance type. T2_MEDIUM: A t2.medium instance type. R4_LARGE: A r4.large
   * instance type. R4_XLARGE: A r4.xlarge instance type. R4_2XLARGE: A r4.2xlarge instance type.
   * R4_4XLARGE: A r4.4xlarge instance type.
   */
  type: Type;
  /**
   * Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:
   * NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput
   * exceeded the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache
   * configuration. EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis
   * process. This is useful for diagnosing bottlenecks in a cache configuration. Metrics will be
   * recorded by API ID. You can set the value to ENABLED or DISABLED.
   */
  healthMetricsConfig?: HealthMetricsConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisApiCachesRequestSchema: Schema<V1ApisApiCachesRequest> = s.object<V1ApisApiCachesRequest>(
  {
    ttl: s.int(),
    transitEncryptionEnabled: s.optional(s.boolean()),
    atRestEncryptionEnabled: s.optional(s.boolean()),
    apiCachingBehavior: apiCachingBehaviorSchema,
    type: typeSchema,
    healthMetricsConfig: s.optional(s.lazy(() => healthMetricsConfigSchema)),
  },
  { additionalProperties: s.json() },
);
