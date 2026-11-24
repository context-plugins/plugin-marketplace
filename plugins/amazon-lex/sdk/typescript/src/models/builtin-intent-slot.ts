import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuiltinIntentSlot = {
  /** A list of the slots defined for the intent. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const builtinIntentSlotSchema: Schema<BuiltinIntentSlot> = s.object<BuiltinIntentSlot>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
