import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProblemDetailsError = {
  /** URI that identifies the problem type */
  type: string;
  /** Short human-readable summary */
  title: string;
  /** HTTP status code */
  status: number;
  /** Human-readable explanation */
  detail: string;
  /** URI that identifies the specific occurrence */
  instance: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const problemDetailsErrorSchema: Schema<ProblemDetailsError> = s.object<ProblemDetailsError>(
  {
    type: s.string(),
    title: s.string(),
    status: s.int(),
    detail: s.string(),
    instance: s.string(),
  },
  { additionalProperties: s.json() },
);
