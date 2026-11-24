import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error details for a failed insight in a batch operation. */
export type ResultsError = {
  /** The key of the insight that failed. */
  insightKey?: string;
  /** The error message. */
  error?: string;
  /** The HTTP status code associated with the error. */
  code?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultsErrorSchema: Schema<ResultsError> = s.object<ResultsError>(
  {
    insightKey: s.optional(s.string()),
    error: s.optional(s.string()),
    code: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
