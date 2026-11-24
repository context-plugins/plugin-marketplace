import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies which results to filter. See Test result details">Test results details for details
 * about different types of results.
 */
export const ResultTypeFilter = {
  OverallTestResults: "OverallTestResults",
  ConversationLevelTestResults: "ConversationLevelTestResults",
  IntentClassificationTestResults: "IntentClassificationTestResults",
  SlotResolutionTestResults: "SlotResolutionTestResults",
  UtteranceLevelResults: "UtteranceLevelResults",
} as const;
export type ResultTypeFilter = (typeof ResultTypeFilter)[keyof typeof ResultTypeFilter] | (string & {});

export const resultTypeFilterSchema: EnumSchema<ResultTypeFilter> =
  s.enumOf<ResultTypeFilter>(ResultTypeFilter);
