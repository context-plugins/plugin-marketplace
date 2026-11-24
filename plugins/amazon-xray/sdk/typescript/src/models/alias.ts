import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Alias = {
  /** The canonical name of the alias. */
  name?: string;
  /** A list of names for the alias, including the canonical name. */
  names?: string[];
  /** The type of the alias. */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aliasSchema: Schema<Alias> = s.object<Alias>(
  {
    name: s.optional(s.string()),
    names: s.optional(s.array(s.string())),
    type: s.optional(s.string()),
    _keysMap: {
      name: "Name",
      names: "Names",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
