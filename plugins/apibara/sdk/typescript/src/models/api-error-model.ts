import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./unions/error.js";
import { errorsSchema, type Errors } from "./unions/errors.js";

export type ApiErrorModel = {
  ok?: boolean | null;
  message?: string | null;
  error?: Error | null;
  errors?: Errors | null;
  status?: number;
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiErrorModelProperties: s.Shape<ApiErrorModel> = {
  ok: s.optionalNullable(s.boolean()),
  message: s.optionalNullable(s.string()),
  error: s.optionalNullable(s.lazy(() => errorSchema)),
  errors: s.optionalNullable(s.lazy(() => errorsSchema)),
  status: s.optional(s.int()),
  code: s.optional(s.string()),
};

export const apiErrorModelInternalSchema: Schema<ApiErrorModel> = s.object<ApiErrorModel>(
  apiErrorModelProperties,
  { additionalProperties: s.json() },
);

export const apiErrorModelSchema: Schema<ApiErrorModel> = s.lazySchema(() =>
  s.object<ApiErrorModel>(
    {
      ...apiErrorModelProperties,
      status: s.optional(s.int().check(s.gte(400), s.lte(599))),
    },
    { additionalProperties: s.json() },
  ),
);
