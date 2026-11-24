import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Group = {
  id?: string;
  label?: string;
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSchema: Schema<Group> = s.object<Group>(
  {
    id: s.optional(s.string()),
    label: s.optional(s.string()),
    email: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
