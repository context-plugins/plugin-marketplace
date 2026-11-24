import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The new data source type. */
export const Type2 = {
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
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
