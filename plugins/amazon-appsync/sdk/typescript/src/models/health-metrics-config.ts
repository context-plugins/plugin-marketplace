import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:
 * NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded
 * the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache
 * configuration. EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis
 * process. This is useful for diagnosing bottlenecks in a cache configuration. Metrics will be
 * recorded by API ID. You can set the value to ENABLED or DISABLED.
 */
export const HealthMetricsConfig = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type HealthMetricsConfig =
  | (typeof HealthMetricsConfig)[keyof typeof HealthMetricsConfig]
  | (string & {});

export const healthMetricsConfigSchema: EnumSchema<HealthMetricsConfig> =
  s.enumOf<HealthMetricsConfig>(HealthMetricsConfig);
