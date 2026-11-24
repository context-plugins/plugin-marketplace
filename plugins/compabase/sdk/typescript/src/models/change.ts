import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Change = {
  field?: string;
  label?: string;
  oldValue?: Record<string, unknown>;
  newValue?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeSchema: Schema<Change> = s.object<Change>(
  {
    field: s.optional(s.string()),
    label: s.optional(s.string()),
    oldValue: s.optional(s.record(s.string(), s.unknown())),
    newValue: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      oldValue: "old_value",
      newValue: "new_value",
    },
  },
  { additionalProperties: s.json() },
);
