import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the data source. AWS_LAMBDA: The data source is an Lambda function. AMAZON_DYNAMODB:
 * The data source is an Amazon DynamoDB table. AMAZON_ELASTICSEARCH: The data source is an Amazon
 * OpenSearch Service domain. AMAZON_OPENSEARCH_SERVICE: The data source is an Amazon OpenSearch
 * Service domain. AMAZON_EVENTBRIDGE: The data source is an Amazon EventBridge configuration.
 * AMAZON_BEDROCK_RUNTIME: The data source is the Amazon Bedrock runtime. NONE: There is no data
 * source. Use this type when you want to invoke a GraphQL operation without connecting to a data
 * source, such as when you're perf
 */
export const TypeAwsAppSyncDataSourcesApi = {
  AwsLambda: "AWS_LAMBDA",
  AmazonDynamodb: "AMAZON_DYNAMODB",
  AmazonElasticsearch: "AMAZON_ELASTICSEARCH",
  None: "NONE",
  Http: "HTTP",
  RelationalDatabase: "RELATIONAL_DATABASE",
  AmazonOpensearchService: "AMAZON_OPENSEARCH_SERVICE",
  AmazonEventbridge: "AMAZON_EVENTBRIDGE",
  AmazonBedrockRuntime: "AMAZON_BEDROCK_RUNTIME",
} as const;
export type TypeAwsAppSyncDataSourcesApi =
  | (typeof TypeAwsAppSyncDataSourcesApi)[keyof typeof TypeAwsAppSyncDataSourcesApi]
  | (string & {});

export const typeAwsAppSyncDataSourcesApiSchema: EnumSchema<TypeAwsAppSyncDataSourcesApi> =
  s.enumOf<TypeAwsAppSyncDataSourcesApi>(TypeAwsAppSyncDataSourcesApi);
