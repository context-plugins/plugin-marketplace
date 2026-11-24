import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OverallTestResultItem = {
  /** Indicates whether the conversation contains multiple turns or not. */
  multiTurnConversation: boolean;
  /** The total number of overall results in the result of the test execution. */
  totalResultCount: number;
  /** The number of speech transcription results in the overall test. */
  speechTranscriptionResultCounts?: Record<string, number>;
  /** The number of results that succeeded. */
  endToEndResultCounts: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const overallTestResultItemSchema: Schema<OverallTestResultItem> = s.object<OverallTestResultItem>(
  {
    multiTurnConversation: s.boolean(),
    totalResultCount: s.int(),
    speechTranscriptionResultCounts: s.optional(s.record(s.string(), s.int())),
    endToEndResultCounts: s.record(s.string(), s.int()),
  },
  { additionalProperties: s.json() },
);
