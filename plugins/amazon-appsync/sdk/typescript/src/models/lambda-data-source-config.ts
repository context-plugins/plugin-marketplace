import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaDataSourceConfig = {
  /** The Amazon Resource Name (ARN) for the Lambda function. */
  lambdaFunctionArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaDataSourceConfigSchema: Schema<LambdaDataSourceConfig> = s.object<LambdaDataSourceConfig>(
  {
    lambdaFunctionArn: s.string(),
  },
  { additionalProperties: s.json() },
);
