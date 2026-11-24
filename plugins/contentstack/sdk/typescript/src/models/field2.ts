import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A field definition within a content type schema. */
export type Field2 = {
  /** Unique identifier of the field. */
  uid?: string;
  /** Data type of the field (e.g., text, number, boolean, date, file, reference). */
  dataType?: string;
  /** Human-readable label for the field. */
  displayName?: string;
  /** Indicates whether the field is required. */
  mandatory?: boolean;
  /** Indicates whether field values must be unique. */
  unique?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const field2Schema: Schema<Field2> = s.object<Field2>(
  {
    uid: s.optional(s.string()),
    dataType: s.optional(s.string()),
    displayName: s.optional(s.string()),
    mandatory: s.optional(s.boolean()),
    unique: s.optional(s.boolean()),
    _keysMap: {
      dataType: "data_type",
      displayName: "display_name",
    },
  },
  { additionalProperties: s.json() },
);
