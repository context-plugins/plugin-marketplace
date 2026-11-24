import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";

/** A reusable global field definition that can be embedded in content types. */
export type GlobalField = {
  /** Unique identifier of the global field. */
  uid?: string;
  /** Display name of the global field. */
  title?: string;
  /** Array of field definitions within the global field group. */
  schema?: Field[];
  /** ISO 8601 timestamp when the global field was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the global field was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const globalFieldSchema: Schema<GlobalField> = s.object<GlobalField>(
  {
    uid: s.optional(s.string()),
    title: s.optional(s.string()),
    schema: s.optional(s.array(s.lazy(() => fieldSchema))),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
