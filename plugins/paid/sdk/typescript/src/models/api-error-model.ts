import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An API error response from the Paid API */
export type ApiErrorModel = {
  /** A human-readable message providing more details about the error. */
  message?: string;
  code?: string;
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiErrorModelSchema: Schema<ApiErrorModel> = s.object<ApiErrorModel>(
  {
    message: s.optional(s.string()),
    code: s.optional(s.string()),
    details: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
