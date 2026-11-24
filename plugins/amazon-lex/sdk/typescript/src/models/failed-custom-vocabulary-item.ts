import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

export type FailedCustomVocabularyItem = {
  /**
   * The unique item identifer for the failed custom vocabulary item from the custom vocabulary
   * list.
   */
  itemId?: string;
  /** The error message for the failed custom vocabulary item from the custom vocabulary list. */
  errorMessage?: string;
  /**
   * The unique error code for the failed custom vocabulary item from the custom vocabulary list.
   */
  errorCode?: ErrorCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failedCustomVocabularyItemSchema: Schema<FailedCustomVocabularyItem> =
  s.object<FailedCustomVocabularyItem>(
    {
      itemId: s.optional(s.string()),
      errorMessage: s.optional(s.string()),
      errorCode: s.optional(s.lazy(() => errorCodeSchema)),
    },
    { additionalProperties: s.json() },
  );
