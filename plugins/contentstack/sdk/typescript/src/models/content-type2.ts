import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { field2Schema, type Field2 } from "./field2.js";

/** A content type definition with schema and configuration. */
export type ContentType2 = {
  /** Unique identifier of the content type. */
  uid?: string;
  /** Display name of the content type. */
  title?: string;
  /** Description of the content type's purpose. */
  description?: string;
  /** Array of field definitions. */
  schema?: Field2[];
  /** ISO 8601 timestamp when the content type was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the content type was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentType2Schema: Schema<ContentType2> = s.object<ContentType2>(
  {
    uid: s.optional(s.string()),
    title: s.optional(s.string()),
    description: s.optional(s.string()),
    schema: s.optional(s.array(s.lazy(() => field2Schema))),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
