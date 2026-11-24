import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1LinesorterRequest = {
  /** Array of text lines to sort (max 10,000) */
  lines: string;
  /** Sort order */
  order?: string;
  /** Enable case-sensitive sorting */
  caseSensitive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1LinesorterRequestSchema: Schema<V1LinesorterRequest> = s.object<V1LinesorterRequest>(
  {
    lines: s.string(),
    order: s.optional(s.string()),
    caseSensitive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
