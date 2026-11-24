import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customVocabularyEntryIdSchema, type CustomVocabularyEntryId } from "./custom-vocabulary-entry-id.js";

export type BatchDeleteCustomVocabularyItemRequest = {
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
   * A list of custom vocabulary items requested to be deleted. Each entry must contain the unique
   * custom vocabulary entry identifier.
   */
  customVocabularyItemList: CustomVocabularyEntryId[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDeleteCustomVocabularyItemRequestSchema: Schema<BatchDeleteCustomVocabularyItemRequest> =
  s.object<BatchDeleteCustomVocabularyItemRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      customVocabularyItemList: s.array(s.lazy(() => customVocabularyEntryIdSchema)),
    },
    { additionalProperties: s.json() },
  );
