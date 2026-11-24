import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include: GraphQL
 * errors: The number of GraphQL errors that occurred. Requests: The number of invocations that
 * occurred during a request. Latency: The time to complete a resolver invocation. Cache hits: The
 * number of cache hits during a request. Cache misses: The number of cache misses during a request.
 * These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request.
 * Metrics will be recorded by API ID and resolver name. resolverLevelMetricsBehavior accepts one of
 * these values at a time: FUL
 */
export const ResolverLevelMetricsBehavior = {
  FullRequestResolverMetrics: "FULL_REQUEST_RESOLVER_METRICS",
  PerResolverMetrics: "PER_RESOLVER_METRICS",
} as const;
export type ResolverLevelMetricsBehavior =
  | (typeof ResolverLevelMetricsBehavior)[keyof typeof ResolverLevelMetricsBehavior]
  | (string & {});

export const resolverLevelMetricsBehaviorSchema: EnumSchema<ResolverLevelMetricsBehavior> =
  s.enumOf<ResolverLevelMetricsBehavior>(ResolverLevelMetricsBehavior);
