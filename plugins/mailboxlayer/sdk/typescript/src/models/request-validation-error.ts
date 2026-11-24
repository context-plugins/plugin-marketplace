import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailSchema, type Detail } from "./detail.js";

/**
 * FastAPI request-validation error body. Returned with HTTP 422 when a required query parameter is
 * missing or malformed. This is a different shape from the ApiError envelope used for service-level
 * errors (which are returned with HTTP 200).
 */
export type RequestValidationError = {
  detail?: Detail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestValidationErrorSchema: Schema<RequestValidationError> = s.object<RequestValidationError>(
  {
    detail: s.optional(s.array(s.lazy(() => detailSchema))),
  },
  { additionalProperties: s.json() },
);
