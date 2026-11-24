import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A content entry with field values and system metadata. */
export type Entry2 = {
  /** Unique identifier of the entry. */
  uid?: string;
  /** Title of the entry. */
  title?: string;
  /** Locale code of the entry. */
  locale?: string;
  /** Version number of the entry. */
  version?: number;
  /** ISO 8601 timestamp when the entry was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the entry was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entry2Schema: Schema<Entry2> = s.object<Entry2>(
  {
    uid: s.optional(s.string()),
    title: s.optional(s.string()),
    locale: s.optional(s.string()),
    version: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      version: "_version",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
