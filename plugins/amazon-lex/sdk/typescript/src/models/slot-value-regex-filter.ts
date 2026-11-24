import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SlotValueRegexFilter = {
  /**
   * A regular expression used to validate the value of a slot. Use a standard regular expression.
   * Amazon Lex supports the following characters in the regular expression: A-Z, a-z 0-9 Unicode
   * characters ("\⁠u") Represent Unicode characters with four digits, for example "\⁠u0041" or
   * "\⁠u005A". The following regular expression operators are not supported: Infinite repeaters: *,
   * +, or {x,} with no upper bound. Wild card (.)
   */
  pattern: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotValueRegexFilterSchema: Schema<SlotValueRegexFilter> = s.object<SlotValueRegexFilter>(
  {
    pattern: s.string(),
  },
  { additionalProperties: s.json() },
);
