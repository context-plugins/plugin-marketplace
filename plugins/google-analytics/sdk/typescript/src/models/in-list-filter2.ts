import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A filter for in list values. */
export type InListFilter2 = {
  /** The list of string values. Must be non-empty. */
  values?: string[];
  /** If true, the string value is case sensitive. */
  caseSensitive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inListFilter2Schema: Schema<InListFilter2> = s.object<InListFilter2>(
  {
    values: s.optional(s.array(s.string())),
    caseSensitive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
