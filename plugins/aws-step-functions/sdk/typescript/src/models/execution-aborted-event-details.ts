import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExecutionAbortedEventDetails = {
  /** The error code of the failure. */
  error?: string;
  /** A more detailed explanation of the cause of the failure. */
  cause?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionAbortedEventDetailsSchema: Schema<ExecutionAbortedEventDetails> =
  s.object<ExecutionAbortedEventDetails>(
    {
      error: s.optional(s.string()),
      cause: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
