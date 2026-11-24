import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  intentClassificationTestResultItemSchema,
  type IntentClassificationTestResultItem,
} from "./intent-classification-test-result-item.js";

export type IntentClassificationTestResults = {
  /** A list of the results for the intent classification test. */
  items: IntentClassificationTestResultItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentClassificationTestResultsSchema: Schema<IntentClassificationTestResults> =
  s.object<IntentClassificationTestResults>(
    {
      items: s.array(s.lazy(() => intentClassificationTestResultItemSchema)),
    },
    { additionalProperties: s.json() },
  );
