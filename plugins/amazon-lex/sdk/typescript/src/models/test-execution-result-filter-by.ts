import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLevelTestResultsFilterBySchema,
  type ConversationLevelTestResultsFilterBy,
} from "./conversation-level-test-results-filter-by.js";
import { resultTypeFilterSchema, type ResultTypeFilter } from "./result-type-filter.js";

export type TestExecutionResultFilterBy = {
  /**
   * Specifies which results to filter. See Test result details">Test results details for details
   * about different types of results.
   */
  resultTypeFilter: ResultTypeFilter;
  conversationLevelTestResultsFilterBy?: ConversationLevelTestResultsFilterBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testExecutionResultFilterBySchema: Schema<TestExecutionResultFilterBy> =
  s.object<TestExecutionResultFilterBy>(
    {
      resultTypeFilter: resultTypeFilterSchema,
      conversationLevelTestResultsFilterBy: s.optional(
        s.lazy(() => conversationLevelTestResultsFilterBySchema),
      ),
    },
    { additionalProperties: s.json() },
  );
