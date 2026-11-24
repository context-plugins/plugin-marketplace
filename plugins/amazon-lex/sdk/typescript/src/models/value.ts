import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Value = {
  /**
   * The part of the user's response to the slot elicitation that Amazon Lex V2 determines is
   * relevant to the slot value.
   */
  originalValue?: string;
  /**
   * The value that Amazon Lex V2 determines for the slot, given the user input. The actual value
   * depends on the setting of the value selection strategy for the bot. You can choose to use the
   * value entered by the user, or you can have Amazon Lex V2 choose the first value in the
   * resolvedValues list.
   */
  interpretedValue: string;
  /**
   * A list of values that Amazon Lex V2 determines are possible resolutions for the user input. The
   * first value matches the interpretedValue.
   */
  resolvedValues?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueSchema: Schema<Value> = s.object<Value>(
  {
    originalValue: s.optional(s.string()),
    interpretedValue: s.string(),
    resolvedValues: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
