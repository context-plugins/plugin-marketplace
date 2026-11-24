import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataSourceLevelMetricsBehaviorSchema,
  type DataSourceLevelMetricsBehavior,
} from "./data-source-level-metrics-behavior.js";
import {
  operationLevelMetricsConfigSchema,
  type OperationLevelMetricsConfig,
} from "./operation-level-metrics-config.js";
import {
  resolverLevelMetricsBehaviorSchema,
  type ResolverLevelMetricsBehavior,
} from "./resolver-level-metrics-behavior.js";

export type EnhancedMetricsConfig = {
  /**
   * Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include: GraphQL
   * errors: The number of GraphQL errors that occurred. Requests: The number of invocations that
   * occurred during a request. Latency: The time to complete a resolver invocation. Cache hits: The
   * number of cache hits during a request. Cache misses: The number of cache misses during a
   * request. These metrics can be emitted to CloudWatch per resolver or for all resolvers in the
   * request. Metrics will be recorded by API ID and resolver name. resolverLevelMetricsBehavior
   * accepts one of these values at a time: FUL
   */
  resolverLevelMetricsBehavior: ResolverLevelMetricsBehavior;
  /**
   * Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:
   * Requests: The number of invocations that occured during a request. Latency: The time to
   * complete a data source invocation. Errors: The number of errors that occurred during a data
   * source invocation. These metrics can be emitted to CloudWatch per data source or for all data
   * sources in the request. Metrics will be recorded by API ID and data source name.
   * dataSourceLevelMetricsBehavior accepts one of these values at a time:
   * FULL_REQUEST_DATA_SOURCE_METRICS: Records and emits metric data for all data sourc
   */
  dataSourceLevelMetricsBehavior: DataSourceLevelMetricsBehavior;
  /**
   * Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:
   * Requests: The number of times a specified GraphQL operation was called. GraphQL errors: The
   * number of GraphQL errors that occurred during a specified GraphQL operation. Metrics will be
   * recorded by API ID and operation name. You can set the value to ENABLED or DISABLED.
   */
  operationLevelMetricsConfig: OperationLevelMetricsConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enhancedMetricsConfigSchema: Schema<EnhancedMetricsConfig> = s.object<EnhancedMetricsConfig>(
  {
    resolverLevelMetricsBehavior: resolverLevelMetricsBehaviorSchema,
    dataSourceLevelMetricsBehavior: dataSourceLevelMetricsBehaviorSchema,
    operationLevelMetricsConfig: operationLevelMetricsConfigSchema,
  },
  { additionalProperties: s.json() },
);
