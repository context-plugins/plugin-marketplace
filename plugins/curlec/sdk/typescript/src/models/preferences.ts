import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Preferences = {
  showDefaultBlocks?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const preferencesSchema: Schema<Preferences> = s.object<Preferences>(
  {
    showDefaultBlocks: s.optional(s.boolean()),
    _keysMap: {
      showDefaultBlocks: "show_default_blocks",
    },
  },
  { additionalProperties: s.json() },
);
