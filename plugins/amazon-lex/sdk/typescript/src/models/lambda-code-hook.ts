import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaCodeHook = {
  /** The Amazon Resource Name (ARN) of the Lambda function. */
  lambdaArn: string;
  /**
   * The version of the request-response that you want Amazon Lex to use to invoke your Lambda
   * function.
   */
  codeHookInterfaceVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaCodeHookSchema: Schema<LambdaCodeHook> = s.object<LambdaCodeHook>(
  {
    lambdaArn: s.string(),
    codeHookInterfaceVersion: s.string(),
    _keysMap: {
      lambdaArn: "lambdaARN",
    },
  },
  { additionalProperties: s.json() },
);
