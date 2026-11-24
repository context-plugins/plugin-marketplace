import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entryModelSchema, type EntryModel } from "./entry-model.js";

/** A paginated list of published entries. */
export type EntryList = {
  /** Array of entry objects. */
  entries?: EntryModel[];
  /** Total count of matching entries when include_count is true. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entryListSchema: Schema<EntryList> = s.object<EntryList>(
  {
    entries: s.optional(s.array(s.lazy(() => entryModelSchema))),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
