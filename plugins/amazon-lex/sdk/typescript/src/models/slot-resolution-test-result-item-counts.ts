import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SlotResolutionTestResultItemCounts = {
  /** The total number of results. */
  totalResultCount: number;
  /**
   * The number of matched, mismatched and execution error results for speech transcription for the
   * slot.
   */
  speechTranscriptionResultCounts?: Record<string, number>;
  /** The number of matched and mismatched results for slot resolution for the slot. */
  slotMatchResultCounts: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotResolutionTestResultItemCountsSchema: Schema<SlotResolutionTestResultItemCounts> =
  s.object<SlotResolutionTestResultItemCounts>(
    {
      totalResultCount: s.int(),
      speechTranscriptionResultCounts: s.optional(s.record(s.string(), s.int())),
      slotMatchResultCounts: s.record(s.string(), s.int()),
    },
    { additionalProperties: s.json() },
  );
