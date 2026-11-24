import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonInput = {
  /** Map of field IDs to values for the person. */
  fields?: Record<string, unknown>;
  location?: Record<string, unknown>;
  tags?: string[];
  unsetTags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personInputSchema: Schema<PersonInput> = s.object<PersonInput>(
  {
    fields: s.optional(s.record(s.string(), s.unknown())),
    location: s.optional(s.record(s.string(), s.unknown())),
    tags: s.optional(s.array(s.string())),
    unsetTags: s.optional(s.array(s.string())),
    _keysMap: {
      unsetTags: "unset_tags",
    },
  },
  { additionalProperties: s.json() },
);
