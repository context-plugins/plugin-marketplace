import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomVocabularyEntryId = {
  /** The unique item identifier for the custom vocabulary items. */
  itemId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customVocabularyEntryIdSchema: Schema<CustomVocabularyEntryId> =
  s.object<CustomVocabularyEntryId>(
    {
      itemId: s.string(),
    },
    { additionalProperties: s.json() },
  );
