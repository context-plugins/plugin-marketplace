import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Enables or disables enhanced data source metrics for specified data sources. Note that
 * metricsConfig won't be used unless the dataSourceLevelMetricsBehavior value is set to
 * PER_DATA_SOURCE_METRICS. If the dataSourceLevelMetricsBehavior is set to
 * FULL_REQUEST_DATA_SOURCE_METRICS instead, metricsConfig will be ignored. However, you can still
 * set its value. metricsConfig can be ENABLED or DISABLED.
 */
export const MetricsConfig = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type MetricsConfig = (typeof MetricsConfig)[keyof typeof MetricsConfig] | (string & {});

export const metricsConfigSchema: EnumSchema<MetricsConfig> = s.enumOf<MetricsConfig>(MetricsConfig);
