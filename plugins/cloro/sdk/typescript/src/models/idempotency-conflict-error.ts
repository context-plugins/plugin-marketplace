import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type IdempotencyConflictError = {
  success?: boolean;
  error?: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const idempotencyConflictErrorSchema: Schema<IdempotencyConflictError> =
  s.object<IdempotencyConflictError>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error1Schema)),
    },
    { additionalProperties: s.json() },
  );
