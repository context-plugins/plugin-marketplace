import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type ForbiddenError = {
  success?: boolean;
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const forbiddenErrorSchema: Schema<ForbiddenError> = s.object<ForbiddenError>(
  {
    success: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => errorSchema)),
  },
  { additionalProperties: s.json() },
);
