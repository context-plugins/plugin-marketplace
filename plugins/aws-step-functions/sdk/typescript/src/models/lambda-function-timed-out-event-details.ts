import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaFunctionTimedOutEventDetails = {
  /** The error code of the failure. */
  error?: string;
  /** A more detailed explanation of the cause of the timeout. */
  cause?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaFunctionTimedOutEventDetailsSchema: Schema<LambdaFunctionTimedOutEventDetails> =
  s.object<LambdaFunctionTimedOutEventDetails>(
    {
      error: s.optional(s.string()),
      cause: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
