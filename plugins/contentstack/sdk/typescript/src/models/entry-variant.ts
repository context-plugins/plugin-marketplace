import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A personalization variant of a content entry. */
export type EntryVariant = {
  /** Unique identifier of the entry variant. */
  uid?: string;
  /** The variant identifier linking this entry to a personalization variant. */
  variantUid?: string;
  /** The locale code of the entry variant. */
  locale?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entryVariantSchema: Schema<EntryVariant> = s.object<EntryVariant>(
  {
    uid: s.optional(s.string()),
    variantUid: s.optional(s.string()),
    locale: s.optional(s.string()),
    _keysMap: {
      variantUid: "variant_uid",
    },
  },
  { additionalProperties: s.json() },
);
