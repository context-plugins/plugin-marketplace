import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customVocabularyItemSchema, type CustomVocabularyItem } from "./custom-vocabulary-item.js";
import {
  failedCustomVocabularyItemSchema,
  type FailedCustomVocabularyItem,
} from "./failed-custom-vocabulary-item.js";

export type BatchUpdateCustomVocabularyItemResponse = {
  /** The identifier of the bot associated with this custom vocabulary. */
  botId?: string;
  /** The identifier of the version of the bot associated with this custom vocabulary. */
  botVersion?: string;
  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must
   * match one of the supported locales. For more information, see Supported Languages .
   */
  localeId?: string;
  /**
   * A list of custom vocabulary items that failed to update during the operation. The reason for
   * the error is contained within each error object.
   */
  errors?: FailedCustomVocabularyItem[];
  /** A list of custom vocabulary items that were successfully updated during the operation. */
  resources?: CustomVocabularyItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchUpdateCustomVocabularyItemResponseSchema: Schema<BatchUpdateCustomVocabularyItemResponse> =
  s.object<BatchUpdateCustomVocabularyItemResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      errors: s.optional(s.array(s.lazy(() => failedCustomVocabularyItemSchema))),
      resources: s.optional(s.array(s.lazy(() => customVocabularyItemSchema))),
    },
    { additionalProperties: s.json() },
  );
