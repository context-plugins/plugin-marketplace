import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PsaCard503Error = {
  code?: string;
  error?: string;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PsaCard503ErrorSchema: Schema<V1PsaCard503Error> = s.object<V1PsaCard503Error>(
  {
    code: s.optional(s.string()),
    error: s.optional(s.string()),
    requestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
