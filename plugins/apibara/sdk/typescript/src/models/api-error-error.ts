import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./unions/error.js";
import { errorsSchema, type Errors } from "./unions/errors.js";

export type ApiErrorError = {
  ok?: boolean | null;
  message?: string | null;
  error?: Error | null;
  errors?: Errors | null;
  status?: number;
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiErrorErrorProperties: s.Shape<ApiErrorError> = {
  ok: s.optionalNullable(s.boolean()),
  message: s.optionalNullable(s.string()),
  error: s.optionalNullable(s.lazy(() => errorSchema)),
  errors: s.optionalNullable(s.lazy(() => errorsSchema)),
  status: s.optional(s.int()),
  code: s.optional(s.string()),
};

export const apiErrorErrorInternalSchema: Schema<ApiErrorError> = s.object<ApiErrorError>(
  apiErrorErrorProperties,
  { additionalProperties: s.json() },
);

export const apiErrorErrorSchema: Schema<ApiErrorError> = s.lazySchema(() =>
  s.object<ApiErrorError>(
    {
      ...apiErrorErrorProperties,
      status: s.optional(s.int().check(s.gte(400), s.lte(599))),
    },
    { additionalProperties: s.json() },
  ),
);
