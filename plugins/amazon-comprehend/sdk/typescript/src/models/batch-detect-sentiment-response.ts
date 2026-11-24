import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  batchDetectSentimentItemResultSchema,
  type BatchDetectSentimentItemResult,
} from "./batch-detect-sentiment-item-result.js";
import { batchItemErrorSchema, type BatchItemError } from "./batch-item-error.js";

export type BatchDetectSentimentResponse = {
  /**
   * A list of objects containing the results of the operation. The results are sorted in ascending
   * order by the Index field and match the order of the documents in the input list. If all of the
   * documents contain an error, the ResultList is empty.
   */
  resultList: BatchDetectSentimentItemResult[];
  /**
   * A list containing one object for each document that contained an error. The results are sorted
   * in ascending order by the Index field and match the order of the documents in the input list.
   * If there are no errors in the batch, the ErrorList is empty.
   */
  errorList: BatchItemError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectSentimentResponseSchema: Schema<BatchDetectSentimentResponse> =
  s.object<BatchDetectSentimentResponse>(
    {
      resultList: s.array(s.lazy(() => batchDetectSentimentItemResultSchema)),
      errorList: s.array(s.lazy(() => batchItemErrorSchema)),
      _keysMap: {
        resultList: "ResultList",
        errorList: "ErrorList",
      },
    },
    { additionalProperties: s.json() },
  );
