import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The result needs to be in a list of string values. */
export type InListFilter = {
  /** The list of string values. Must be non-empty. */
  values?: string[];
  /** If true, the string value is case sensitive. */
  caseSensitive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inListFilterSchema: Schema<InListFilter> = s.object<InListFilter>(
  {
    values: s.optional(s.array(s.string())),
    caseSensitive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
