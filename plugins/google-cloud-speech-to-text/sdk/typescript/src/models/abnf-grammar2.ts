import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Augmented Backus-Naur form (ABNF) is a standardized grammar notation comprised by a set of
 * derivation rules. See specifications: https://www.w3.org/TR/speech-grammar
 */
export type AbnfGrammar2 = {
  /**
   * All declarations and rules of an ABNF grammar broken up into multiple strings that will end up
   * concatenated.
   */
  abnfStrings?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const abnfGrammar2Schema: Schema<AbnfGrammar2> = s.object<AbnfGrammar2>(
  {
    abnfStrings: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
