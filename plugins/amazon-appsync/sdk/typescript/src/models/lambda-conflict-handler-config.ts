import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaConflictHandlerConfig = {
  /** The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler. */
  lambdaConflictHandlerArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaConflictHandlerConfigSchema: Schema<LambdaConflictHandlerConfig> =
  s.object<LambdaConflictHandlerConfig>(
    {
      lambdaConflictHandlerArn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
