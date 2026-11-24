import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeHintValue = {
  /** The phrase that Amazon Lex should look for in the user's input to the bot. */
  phrase: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeHintValueSchema: Schema<RuntimeHintValue> = s.object<RuntimeHintValue>(
  {
    phrase: s.string(),
  },
  { additionalProperties: s.json() },
);
