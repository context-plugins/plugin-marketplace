import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SlotDefaultValue = {
  /** The default value to use when a user doesn't provide a value for a slot. */
  defaultValue: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotDefaultValueSchema: Schema<SlotDefaultValue> = s.object<SlotDefaultValue>(
  {
    defaultValue: s.string(),
  },
  { additionalProperties: s.json() },
);
