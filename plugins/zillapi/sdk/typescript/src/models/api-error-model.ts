import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type ApiErrorModel = {
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiErrorModelSchema: Schema<ApiErrorModel> = s.object<ApiErrorModel>(
  {
    error: s.optional(s.lazy(() => errorSchema)),
  },
  { additionalProperties: s.json() },
);
