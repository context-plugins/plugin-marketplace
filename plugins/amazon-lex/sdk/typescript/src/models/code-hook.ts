import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CodeHook = {
  /** The Amazon Resource Name (ARN) of the Lambda function. */
  uri: string;
  /**
   * The version of the request-response that you want Amazon Lex to use to invoke your Lambda
   * function. For more information, see using-lambda.
   */
  messageVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const codeHookSchema: Schema<CodeHook> = s.object<CodeHook>(
  {
    uri: s.string(),
    messageVersion: s.string(),
  },
  { additionalProperties: s.json() },
);
