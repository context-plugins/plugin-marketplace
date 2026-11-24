import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A field definition within a content type schema. */
export type Field = {
  /** Unique identifier of the field within the content type. */
  uid?: string;
  /**
   * The data type of the field. Common values: text, number, boolean, date, file, link, json,
   * reference, global_field, group, blocks.
   */
  dataType?: string;
  /** Human-readable label for the field. */
  displayName?: string;
  /** Indicates whether the field is required for entry creation. */
  mandatory?: boolean;
  /** Indicates whether field values must be unique across entries. */
  unique?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldSchema: Schema<Field> = s.object<Field>(
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
