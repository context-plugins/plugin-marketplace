import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiErrorModelSchema, type ApiErrorModel } from "./api-error-model.js";

/** An error response from the Paid API */
export type ErrorError = {
  /** An API error response from the Paid API */
  error: ApiErrorModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    error: apiErrorModelSchema,
  },
  { additionalProperties: s.json() },
);
