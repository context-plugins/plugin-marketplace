import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Deleted = {
  id?: string;
  object?: string;
  deleted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deletedSchema: Schema<Deleted> = s.object<Deleted>(
  {
    id: s.optional(s.string()),
    object: s.optional(s.string()),
    deleted: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
