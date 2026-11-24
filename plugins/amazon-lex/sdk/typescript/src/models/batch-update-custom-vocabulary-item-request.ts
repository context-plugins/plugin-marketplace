import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customVocabularyItemSchema, type CustomVocabularyItem } from "./custom-vocabulary-item.js";

export type BatchUpdateCustomVocabularyItemRequest = {
  /** The identifier of the bot associated with this custom vocabulary */
  botId: string;
  /** The identifier of the version of the bot associated with this custom vocabulary. */
  botVersion: string;
  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must
   * match one of the supported locales. For more information, see Supported Languages .
   */
  localeId: string;
  /**
   * A list of custom vocabulary items with updated fields. Each entry must contain a phrase and can
   * optionally contain a displayAs and/or a weight.
   */
  customVocabularyItemList: CustomVocabularyItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchUpdateCustomVocabularyItemRequestSchema: Schema<BatchUpdateCustomVocabularyItemRequest> =
  s.object<BatchUpdateCustomVocabularyItemRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      customVocabularyItemList: s.array(s.lazy(() => customVocabularyItemSchema)),
    },
    { additionalProperties: s.json() },
  );
