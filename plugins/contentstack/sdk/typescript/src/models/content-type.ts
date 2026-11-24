import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";

/** A content type definition including schema and metadata. */
export type ContentType = {
  /** Unique identifier of the content type. */
  uid?: string;
  /** Display name of the content type. */
  title?: string;
  /** Array of field definitions for the content type. */
  schema?: Field[];
  /** Configuration options for the content type such as versioning and workflow settings. */
  options?: Record<string, unknown>;
  /** ISO 8601 timestamp when the content type was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the content type was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentTypeSchema: Schema<ContentType> = s.object<ContentType>(
  {
    uid: s.optional(s.string()),
    title: s.optional(s.string()),
    schema: s.optional(s.array(s.lazy(() => fieldSchema))),
    options: s.optional(s.record(s.string(), s.unknown())),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
