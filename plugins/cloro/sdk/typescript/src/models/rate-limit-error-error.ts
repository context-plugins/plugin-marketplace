import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error6Schema, type Error6 } from "./error6.js";

export type RateLimitErrorError = {
  success?: boolean;
  error?: Error6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimitErrorErrorSchema: Schema<RateLimitErrorError> = s.object<RateLimitErrorError>(
  {
    success: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => error6Schema)),
  },
  { additionalProperties: s.json() },
);
