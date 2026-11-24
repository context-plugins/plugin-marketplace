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
import {
  typeAwsAppSyncDataSourcesApiSchema,
  type TypeAwsAppSyncDataSourcesApi,
} from "./type-aws-app-sync-data-sources-api.js";

export type DataSource = {
  /** The data source Amazon Resource Name (ARN). */
  dataSourceArn?: string;
  /** The name of the data source. */
  name?: string;
  /** The description of the data source. */
  description?: string;
  /**
   * The type of the data source. AWS_LAMBDA: The data source is an Lambda function.
   * AMAZON_DYNAMODB: The data source is an Amazon DynamoDB table. AMAZON_ELASTICSEARCH: The data
   * source is an Amazon OpenSearch Service domain. AMAZON_OPENSEARCH_SERVICE: The data source is an
   * Amazon OpenSearch Service domain. AMAZON_EVENTBRIDGE: The data source is an Amazon EventBridge
   * configuration. AMAZON_BEDROCK_RUNTIME: The data source is the Amazon Bedrock runtime. NONE:
   * There is no data source. Use this type when you want to invoke a GraphQL operation without
   * connecting to a data source, such as when you're perf
   */
  type?: TypeAwsAppSyncDataSourcesApi;
  /**
   * The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data
   * source. The system assumes this role when accessing the data source.
   */
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

export const dataSourceSchema: Schema<DataSource> = s.object<DataSource>(
  {
    dataSourceArn: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeAwsAppSyncDataSourcesApiSchema)),
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
