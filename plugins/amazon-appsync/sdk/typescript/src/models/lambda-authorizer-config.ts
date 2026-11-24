import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaAuthorizerConfig = {
  /**
   * The number of seconds a response should be cached for. The default is 0 seconds, which disables
   * caching. If you don't specify a value for authorizerResultTtlInSeconds, the default value is
   * used. The maximum value is one hour (3600 seconds). The Lambda function can override this by
   * returning a ttlOverride key in its response.
   */
  authorizerResultTtlInSeconds?: number;
  /**
   * The Amazon Resource Name (ARN) of the Lambda function to be called for authorization. This can
   * be a standard Lambda ARN, a version ARN (.../v3), or an alias ARN. Note: This Lambda function
   * must have the following resource-based policy assigned to it. When configuring Lambda
   * authorizers in the console, this is done for you. To use the Command Line Interface (CLI), run
   * the following: aws lambda add-permission --function-name
   * "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync"
   * --principal appsync.amazonaws.com --action lambda:InvokeFunction
   */
  authorizerUri: string;
  /** A regular expression for validation of tokens before the Lambda function is called. */
  identityValidationExpression?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaAuthorizerConfigSchema: Schema<LambdaAuthorizerConfig> = s.object<LambdaAuthorizerConfig>(
  {
    authorizerResultTtlInSeconds: s.optional(s.int()),
    authorizerUri: s.string(),
    identityValidationExpression: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
