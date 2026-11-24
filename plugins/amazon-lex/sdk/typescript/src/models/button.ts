import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button = {
  /**
   * The text that appears on the button. Use this to tell the user what value is returned when they
   * choose this button.
   */
  text: string;
  /**
   * The value returned to Amazon Lex when the user chooses this button. This must be one of the
   * slot values configured for the slot.
   */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buttonSchema: Schema<Button> = s.object<Button>(
  {
    text: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
