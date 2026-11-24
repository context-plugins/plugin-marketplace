import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error9Schema, type Error9 } from "./error9.js";

export type IdempotencyConflictError2 = {
  success?: boolean;
  error?: Error9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const idempotencyConflictError2Schema: Schema<IdempotencyConflictError2> =
  s.object<IdempotencyConflictError2>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error9Schema)),
    },
    { additionalProperties: s.json() },
  );
