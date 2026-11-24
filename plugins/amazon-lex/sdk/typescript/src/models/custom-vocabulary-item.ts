import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomVocabularyItem = {
  /** The unique item identifer for the custom vocabulary item from the custom vocabulary list. */
  itemId: string;
  /** The unique phrase for the custom vocabulary item from the custom vocabulary list. */
  phrase: string;
  /** The weight assigned for the custom vocabulary item from the custom vocabulary list. */
  weight?: number;
  /** The DisplayAs value for the custom vocabulary item from the custom vocabulary list. */
  displayAs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customVocabularyItemSchema: Schema<CustomVocabularyItem> = s.object<CustomVocabularyItem>(
  {
    itemId: s.string(),
    phrase: s.string(),
    weight: s.optional(s.int()),
    displayAs: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
