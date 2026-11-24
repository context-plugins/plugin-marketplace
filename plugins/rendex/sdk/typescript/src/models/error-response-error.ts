import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

export type ErrorResponseError = {
  success?: boolean;
  error?: Error;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>(
  {
    success: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => errorSchema)),
    meta: s.optional(s.lazy(() => responseMetaSchema)),
  },
  { additionalProperties: s.json() },
);
