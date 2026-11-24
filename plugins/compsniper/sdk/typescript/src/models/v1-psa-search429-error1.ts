import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PsaSearch429Error1 = {
  code?: string;
  error?: string;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PsaSearch429Error1Schema: Schema<V1PsaSearch429Error1> = s.object<V1PsaSearch429Error1>(
  {
    code: s.optional(s.string()),
    error: s.optional(s.string()),
    requestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
