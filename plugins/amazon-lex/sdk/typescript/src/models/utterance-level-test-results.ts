import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  utteranceLevelTestResultItemSchema,
  type UtteranceLevelTestResultItem,
} from "./utterance-level-test-result-item.js";

export type UtteranceLevelTestResults = {
  /** Contains information about an utterance in the results of the test set execution. */
  items: UtteranceLevelTestResultItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceLevelTestResultsSchema: Schema<UtteranceLevelTestResults> =
  s.object<UtteranceLevelTestResults>(
    {
      items: s.array(s.lazy(() => utteranceLevelTestResultItemSchema)),
    },
    { additionalProperties: s.json() },
  );
