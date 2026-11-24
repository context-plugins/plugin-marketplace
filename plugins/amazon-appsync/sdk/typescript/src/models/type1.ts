import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the DataSource. */
export const Type1 = {
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
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
