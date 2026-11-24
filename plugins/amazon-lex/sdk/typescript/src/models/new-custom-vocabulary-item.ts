import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NewCustomVocabularyItem = {
  /** The unique phrase for the new custom vocabulary item from the custom vocabulary list. */
  phrase: string;
  /** The weight assigned to the new custom vocabulary item from the custom vocabulary list. */
  weight?: number;
  /**
   * The display as value assigned to the new custom vocabulary item from the custom vocabulary
   * list.
   */
  displayAs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newCustomVocabularyItemSchema: Schema<NewCustomVocabularyItem> =
  s.object<NewCustomVocabularyItem>(
    {
      phrase: s.string(),
      weight: s.optional(s.int()),
      displayAs: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
