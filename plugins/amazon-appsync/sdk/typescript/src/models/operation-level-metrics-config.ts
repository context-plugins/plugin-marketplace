import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:
 * Requests: The number of times a specified GraphQL operation was called. GraphQL errors: The
 * number of GraphQL errors that occurred during a specified GraphQL operation. Metrics will be
 * recorded by API ID and operation name. You can set the value to ENABLED or DISABLED.
 */
export const OperationLevelMetricsConfig = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type OperationLevelMetricsConfig =
  | (typeof OperationLevelMetricsConfig)[keyof typeof OperationLevelMetricsConfig]
  | (string & {});

export const operationLevelMetricsConfigSchema: EnumSchema<OperationLevelMetricsConfig> =
  s.enumOf<OperationLevelMetricsConfig>(OperationLevelMetricsConfig);
