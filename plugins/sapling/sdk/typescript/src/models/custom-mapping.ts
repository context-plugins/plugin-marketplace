import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomMapping = {
  caseSensitive?: boolean;
  /** RFC 1123 timestamp, e.g. "Wed, 07 Oct 2020 21:15:47 GMT". */
  createdAt?: string;
  /** Shown to the user with the suggestion; null when none was set. */
  description?: Record<string, unknown>;
  entry?: string;
  id?: string;
  mapping?: string;
  /** RFC 1123 timestamp. */
  updatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customMappingSchema: Schema<CustomMapping> = s.object<CustomMapping>(
  {
    caseSensitive: s.optional(s.boolean()),
    createdAt: s.optional(s.string()),
    description: s.optional(s.record(s.string(), s.unknown())),
    entry: s.optional(s.string()),
    id: s.optional(s.string()),
    mapping: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      caseSensitive: "case_sensitive",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
