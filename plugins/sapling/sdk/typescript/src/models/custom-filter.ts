import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomFilter = {
  caseSensitive?: boolean;
  /** RFC 1123 timestamp, e.g. "Wed, 07 Oct 2020 21:15:47 GMT". */
  createdAt?: string;
  id?: string;
  input?: string;
  output?: string;
  /** RFC 1123 timestamp. */
  updatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFilterSchema: Schema<CustomFilter> = s.object<CustomFilter>(
  {
    caseSensitive: s.optional(s.boolean()),
    createdAt: s.optional(s.string()),
    id: s.optional(s.string()),
    input: s.optional(s.string()),
    output: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      caseSensitive: "case_sensitive",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
