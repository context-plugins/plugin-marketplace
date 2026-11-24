import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeLexButton = {
  /** Text that is visible to the user on the button. */
  text: string;
  /**
   * The value sent to Amazon Lex when a user chooses the button. For example, consider button text
   * "NYC." When the user chooses the button, the value sent can be "New York City."
   */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexButtonSchema: Schema<RuntimeLexButton> = s.object<RuntimeLexButton>(
  {
    text: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
