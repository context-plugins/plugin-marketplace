import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newCustomVocabularyItemSchema, type NewCustomVocabularyItem } from "./new-custom-vocabulary-item.js";

export type BatchCreateCustomVocabularyItemRequest = {
  /** The identifier of the bot associated with this custom vocabulary. */
  botId: string;
  /** The identifier of the version of the bot associated with this custom vocabulary. */
  botVersion: string;
  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must
   * match one of the supported locales. For more information, see Supported Languages .
   */
  localeId: string;
  /**
   * A list of new custom vocabulary items. Each entry must contain a phrase and can optionally
   * contain a displayAs and/or a weight.
   */
  customVocabularyItemList: NewCustomVocabularyItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchCreateCustomVocabularyItemRequestSchema: Schema<BatchCreateCustomVocabularyItemRequest> =
  s.object<BatchCreateCustomVocabularyItemRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      customVocabularyItemList: s.array(s.lazy(() => newCustomVocabularyItemSchema)),
    },
    { additionalProperties: s.json() },
  );
