import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Merge into the original request body to trigger the fallback. */
export type RetryWith = {
  aiFallback?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retryWithSchema: Schema<RetryWith> = s.object<RetryWith>(
  {
    aiFallback: s.optional(s.boolean()),
    _keysMap: {
      aiFallback: "ai_fallback",
    },
  },
  { additionalProperties: s.json() },
);
