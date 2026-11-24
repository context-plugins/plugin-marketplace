import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customVocabularyItemSchema, type CustomVocabularyItem } from "./custom-vocabulary-item.js";

export type ListCustomVocabularyItemsResponse = {
  /** The identifier of the bot associated with this custom vocabulary. */
  botId?: string;
  /** The identifier of the version of the bot associated with this custom vocabulary. */
  botVersion?: string;
  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must
   * match one of the supported locales. For more information, see Supported Languages .
   */
  localeId?: string;
  /** The custom vocabulary items from the list custom vocabulary response. */
  customVocabularyItems?: CustomVocabularyItem[];
  /** The nextToken identifier to the list custom vocabulary response. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCustomVocabularyItemsResponseSchema: Schema<ListCustomVocabularyItemsResponse> =
  s.object<ListCustomVocabularyItemsResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      customVocabularyItems: s.optional(s.array(s.lazy(() => customVocabularyItemSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
