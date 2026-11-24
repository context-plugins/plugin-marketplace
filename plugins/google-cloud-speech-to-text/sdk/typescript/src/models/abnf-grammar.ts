import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AbnfGrammar = {
  /**
   * All declarations and rules of an ABNF grammar broken up into multiple strings that will end up
   * concatenated.
   */
  abnfStrings?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const abnfGrammarSchema: Schema<AbnfGrammar> = s.object<AbnfGrammar>(
  {
    abnfStrings: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
