import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single replacement configuration. */
export type EntryModel = {
  /** What to replace. Max length is 100 characters. */
  search?: string;
  /** What to replace with. Max length is 100 characters. */
  replace?: string;
  /** Whether the search is case sensitive. */
  caseSensitive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entryModelSchema: Schema<EntryModel> = s.object<EntryModel>(
  {
    search: s.optional(s.string()),
    replace: s.optional(s.string()),
    caseSensitive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
