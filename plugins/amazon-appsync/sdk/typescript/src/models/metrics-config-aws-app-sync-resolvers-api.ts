import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Enables or disables enhanced resolver metrics for specified resolvers. Note that metricsConfig
 * won't be used unless the resolverLevelMetricsBehavior value is set to PER_RESOLVER_METRICS. If
 * the resolverLevelMetricsBehavior is set to FULL_REQUEST_RESOLVER_METRICS instead, metricsConfig
 * will be ignored. However, you can still set its value. metricsConfig can be ENABLED or DISABLED.
 */
export const MetricsConfigAwsAppSyncResolversApi = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type MetricsConfigAwsAppSyncResolversApi =
  | (typeof MetricsConfigAwsAppSyncResolversApi)[keyof typeof MetricsConfigAwsAppSyncResolversApi]
  | (string & {});

export const metricsConfigAwsAppSyncResolversApiSchema: EnumSchema<MetricsConfigAwsAppSyncResolversApi> =
  s.enumOf<MetricsConfigAwsAppSyncResolversApi>(MetricsConfigAwsAppSyncResolversApi);
