import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entryVariantSchema, type EntryVariant } from "./entry-variant.js";

/** A list of personalization variants for an entry. */
export type EntryVariantList = {
  /** Array of entry variant objects. */
  entries?: EntryVariant[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entryVariantListSchema: Schema<EntryVariantList> = s.object<EntryVariantList>(
  {
    entries: s.optional(s.array(s.lazy(() => entryVariantSchema))),
  },
  { additionalProperties: s.json() },
);
