import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SchemasMember = {
  /** The ID of a member. */
  value?: string;
  /** The display name of a member. */
  display?: string;
  /** The type of member (User or Group). */
  type?: string;
  /** The URL to access the member */
  ref?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemasMemberSchema: Schema<SchemasMember> = s.object<SchemasMember>(
  {
    value: s.optional(s.string()),
    display: s.optional(s.string()),
    type: s.optional(s.string()),
    ref: s.optional(s.string()),
    _keysMap: {
      ref: "$ref",
    },
  },
  { additionalProperties: s.json() },
);
