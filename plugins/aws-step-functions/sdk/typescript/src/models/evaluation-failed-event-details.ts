import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EvaluationFailedEventDetails = {
  /** The error code of the failure. */
  error?: string;
  /** A more detailed explanation of the cause of the failure. */
  cause?: string;
  /** The location of the field in the state in which the evaluation error occurred. */
  location?: string;
  /** The name of the state in which the evaluation error occurred. */
  state: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evaluationFailedEventDetailsSchema: Schema<EvaluationFailedEventDetails> =
  s.object<EvaluationFailedEventDetails>(
    {
      error: s.optional(s.string()),
      cause: s.optional(s.string()),
      location: s.optional(s.string()),
      state: s.string(),
    },
    { additionalProperties: s.json() },
  );
