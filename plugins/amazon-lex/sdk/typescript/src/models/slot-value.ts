import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SlotValue = {
  /**
   * The value that Amazon Lex determines for the slot. The actual value depends on the setting of
   * the value selection strategy for the bot. You can choose to use the value entered by the user,
   * or you can have Amazon Lex choose the first value in the resolvedValues list.
   */
  interpretedValue?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotValueSchema: Schema<SlotValue> = s.object<SlotValue>(
  {
    interpretedValue: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
