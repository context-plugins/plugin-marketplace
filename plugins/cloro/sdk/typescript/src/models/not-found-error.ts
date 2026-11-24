import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error8Schema, type Error8 } from "./error8.js";

export type NotFoundError = {
  success?: boolean;
  error?: Error8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notFoundErrorSchema: Schema<NotFoundError> = s.object<NotFoundError>(
  {
    success: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => error8Schema)),
  },
  { additionalProperties: s.json() },
);
