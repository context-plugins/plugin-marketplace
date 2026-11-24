import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IntentClassificationTestResultItemCounts = {
  /** The total number of results in the intent classification test. */
  totalResultCount: number;
  /**
   * The number of matched, mismatched, and execution error results for speech transcription for the
   * intent.
   */
  speechTranscriptionResultCounts?: Record<string, number>;
  /** The number of matched and mismatched results for intent recognition for the intent. */
  intentMatchResultCounts: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentClassificationTestResultItemCountsSchema: Schema<IntentClassificationTestResultItemCounts> =
  s.object<IntentClassificationTestResultItemCounts>(
    {
      totalResultCount: s.int(),
      speechTranscriptionResultCounts: s.optional(s.record(s.string(), s.int())),
      intentMatchResultCounts: s.record(s.string(), s.int()),
    },
    { additionalProperties: s.json() },
  );
