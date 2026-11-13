import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body22 = {
  /** Current shared label name to rename. */
  name: string;
  /** New shared label name to apply to matching tasks. */
  newName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body22Schema: Schema<Body22> = s.object<Body22>(
  {
    name: s.string(),
    newName: s.string(),
    _keysMap: {
      newName: "new_name",
    },
  },
  { additionalProperties: s.json() },
);
