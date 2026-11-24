import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLevelTestResultsSchema,
  type ConversationLevelTestResults,
} from "./conversation-level-test-results.js";
import {
  intentClassificationTestResultsSchema,
  type IntentClassificationTestResults,
} from "./intent-classification-test-results.js";
import {
  intentLevelSlotResolutionTestResultsSchema,
  type IntentLevelSlotResolutionTestResults,
} from "./intent-level-slot-resolution-test-results.js";
import { overallTestResultsSchema, type OverallTestResults } from "./overall-test-results.js";
import {
  utteranceLevelTestResultsSchema,
  type UtteranceLevelTestResults,
} from "./utterance-level-test-results.js";

export type TestExecutionResultItems = {
  overallTestResults?: OverallTestResults;
  conversationLevelTestResults?: ConversationLevelTestResults;
  intentClassificationTestResults?: IntentClassificationTestResults;
  intentLevelSlotResolutionTestResults?: IntentLevelSlotResolutionTestResults;
  utteranceLevelTestResults?: UtteranceLevelTestResults;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testExecutionResultItemsSchema: Schema<TestExecutionResultItems> =
  s.object<TestExecutionResultItems>(
    {
      overallTestResults: s.optional(s.lazy(() => overallTestResultsSchema)),
      conversationLevelTestResults: s.optional(s.lazy(() => conversationLevelTestResultsSchema)),
      intentClassificationTestResults: s.optional(s.lazy(() => intentClassificationTestResultsSchema)),
      intentLevelSlotResolutionTestResults: s.optional(
        s.lazy(() => intentLevelSlotResolutionTestResultsSchema),
      ),
      utteranceLevelTestResults: s.optional(s.lazy(() => utteranceLevelTestResultsSchema)),
    },
    { additionalProperties: s.json() },
  );
