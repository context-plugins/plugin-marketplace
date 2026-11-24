import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:
 * Requests: The number of invocations that occured during a request. Latency: The time to complete
 * a data source invocation. Errors: The number of errors that occurred during a data source
 * invocation. These metrics can be emitted to CloudWatch per data source or for all data sources in
 * the request. Metrics will be recorded by API ID and data source name.
 * dataSourceLevelMetricsBehavior accepts one of these values at a time:
 * FULL_REQUEST_DATA_SOURCE_METRICS: Records and emits metric data for all data sourc
 */
export const DataSourceLevelMetricsBehavior = {
  FullRequestDataSourceMetrics: "FULL_REQUEST_DATA_SOURCE_METRICS",
  PerDataSourceMetrics: "PER_DATA_SOURCE_METRICS",
} as const;
export type DataSourceLevelMetricsBehavior =
  | (typeof DataSourceLevelMetricsBehavior)[keyof typeof DataSourceLevelMetricsBehavior]
  | (string & {});

export const dataSourceLevelMetricsBehaviorSchema: EnumSchema<DataSourceLevelMetricsBehavior> =
  s.enumOf<DataSourceLevelMetricsBehavior>(DataSourceLevelMetricsBehavior);
