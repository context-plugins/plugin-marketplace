import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LabelAlias = {
  /** The name of an alias for a given label. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelAliasSchema: Schema<LabelAlias> = s.object<LabelAlias>(
  {
    name: s.optional(s.string()),
    _keysMap: {
      name: "Name",
    },
  },
  { additionalProperties: s.json() },
);
