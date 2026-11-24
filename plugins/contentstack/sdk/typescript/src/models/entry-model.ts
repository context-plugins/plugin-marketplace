import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A published content entry with all its field values. */
export type EntryModel = {
  /** Unique identifier of the entry. */
  uid?: string;
  /** The title of the entry. */
  title?: string;
  /** The locale code of the entry. */
  locale?: string;
  /** ISO 8601 timestamp when the entry was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the entry was last updated. */
  updatedAt?: Date;
  /** ISO 8601 timestamp when the entry was last published. */
  publishedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entryModelSchema: Schema<EntryModel> = s.object<EntryModel>(
  {
    uid: s.optional(s.string()),
    title: s.optional(s.string()),
    locale: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    publishedAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      publishedAt: "published_at",
    },
  },
  { additionalProperties: s.json() },
);
