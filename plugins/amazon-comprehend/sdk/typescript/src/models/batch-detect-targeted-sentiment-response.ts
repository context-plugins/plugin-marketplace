import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  batchDetectTargetedSentimentItemResultSchema,
  type BatchDetectTargetedSentimentItemResult,
} from "./batch-detect-targeted-sentiment-item-result.js";
import { batchItemErrorSchema, type BatchItemError } from "./batch-item-error.js";

export type BatchDetectTargetedSentimentResponse = {
  /**
   * A list of objects containing the results of the operation. The results are sorted in ascending
   * order by the Index field and match the order of the documents in the input list. If all of the
   * documents contain an error, the ResultList is empty.
   */
  resultList: BatchDetectTargetedSentimentItemResult[];
  /** List of errors that the operation can return. */
  errorList: BatchItemError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectTargetedSentimentResponseSchema: Schema<BatchDetectTargetedSentimentResponse> =
  s.object<BatchDetectTargetedSentimentResponse>(
    {
      resultList: s.array(s.lazy(() => batchDetectTargetedSentimentItemResultSchema)),
      errorList: s.array(s.lazy(() => batchItemErrorSchema)),
      _keysMap: {
        resultList: "ResultList",
        errorList: "ErrorList",
      },
    },
    { additionalProperties: s.json() },
  );
