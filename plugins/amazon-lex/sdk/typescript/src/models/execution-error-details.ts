import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExecutionErrorDetails = {
  /** The error code for the error. */
  errorCode: string;
  /** The message describing the error. */
  errorMessage: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionErrorDetailsSchema: Schema<ExecutionErrorDetails> = s.object<ExecutionErrorDetails>(
  {
    errorCode: s.string(),
    errorMessage: s.string(),
  },
  { additionalProperties: s.json() },
);
