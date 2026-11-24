import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1YmmResponse = {
  success?: boolean;
  bestMatch?: Record<string, unknown>;
  trimOptions?: Record<string, unknown>[];
  input?: Record<string, unknown>;
  timestamp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1YmmResponseSchema: Schema<V1YmmResponse> = s.object<V1YmmResponse>(
  {
    success: s.optional(s.boolean()),
    bestMatch: s.optional(s.record(s.string(), s.unknown())),
    trimOptions: s.optional(s.array(s.record(s.string(), s.unknown()))),
    input: s.optional(s.record(s.string(), s.unknown())),
    timestamp: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
