import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dynamodbDataSourceConfigSchema,
  type DynamodbDataSourceConfig,
} from "./dynamodb-data-source-config.js";
import {
  elasticsearchDataSourceConfigSchema,
  type ElasticsearchDataSourceConfig,
} from "./elasticsearch-data-source-config.js";
import {
  eventBridgeDataSourceConfigSchema,
  type EventBridgeDataSourceConfig,
} from "./event-bridge-data-source-config.js";
import { httpDataSourceConfigSchema, type HttpDataSourceConfig } from "./http-data-source-config.js";
import { lambdaDataSourceConfigSchema, type LambdaDataSourceConfig } from "./lambda-data-source-config.js";
import { metricsConfigSchema, type MetricsConfig } from "./metrics-config.js";
import {
  openSearchServiceDataSourceConfigSchema,
  type OpenSearchServiceDataSourceConfig,
} from "./open-search-service-data-source-config.js";
import {
  relationalDatabaseDataSourceConfigSchema,
  type RelationalDatabaseDataSourceConfig,
} from "./relational-database-data-source-config.js";
import { type2Schema, type Type2 } from "./type2.js";

export type V1ApisDatasourcesRequest1 = {
  /** The new description for the data source. */
  description?: string;
  /** The new data source type. */
  type: Type2;
  /** The new service role Amazon Resource Name (ARN) for the data source. */
  serviceRoleArn?: string;
  dynamodbConfig?: DynamodbDataSourceConfig;
  lambdaConfig?: LambdaDataSourceConfig;
  elasticsearchConfig?: ElasticsearchDataSourceConfig;
  openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;
  httpConfig?: HttpDataSourceConfig;
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
  eventBridgeConfig?: EventBridgeDataSourceConfig;
  /**
   * Enables or disables enhanced data source metrics for specified data sources. Note that
   * metricsConfig won't be used unless the dataSourceLevelMetricsBehavior value is set to
   * PER_DATA_SOURCE_METRICS. If the dataSourceLevelMetricsBehavior is set to
   * FULL_REQUEST_DATA_SOURCE_METRICS instead, metricsConfig will be ignored. However, you can still
   * set its value. metricsConfig can be ENABLED or DISABLED.
   */
  metricsConfig?: MetricsConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisDatasourcesRequest1Schema: Schema<V1ApisDatasourcesRequest1> =
  s.object<V1ApisDatasourcesRequest1>(
    {
      description: s.optional(s.string()),
      type: type2Schema,
      serviceRoleArn: s.optional(s.string()),
      dynamodbConfig: s.optional(s.lazy(() => dynamodbDataSourceConfigSchema)),
      lambdaConfig: s.optional(s.lazy(() => lambdaDataSourceConfigSchema)),
      elasticsearchConfig: s.optional(s.lazy(() => elasticsearchDataSourceConfigSchema)),
      openSearchServiceConfig: s.optional(s.lazy(() => openSearchServiceDataSourceConfigSchema)),
      httpConfig: s.optional(s.lazy(() => httpDataSourceConfigSchema)),
      relationalDatabaseConfig: s.optional(s.lazy(() => relationalDatabaseDataSourceConfigSchema)),
      eventBridgeConfig: s.optional(s.lazy(() => eventBridgeDataSourceConfigSchema)),
      metricsConfig: s.optional(s.lazy(() => metricsConfigSchema)),
    },
    { additionalProperties: s.json() },
  );
