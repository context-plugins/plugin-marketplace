import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type InternalError = {
  success?: boolean;
  error?: Error5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internalErrorSchema: Schema<InternalError> = s.object<InternalError>(
  {
    success: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => error5Schema)),
  },
  { additionalProperties: s.json() },
);
