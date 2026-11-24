import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonTranscribeServiceOperationsApiSchema,
  type TypeAmazonTranscribeServiceOperationsApi,
} from "./type-amazon-transcribe-service-operations-api.js";

export type Item = {
  /** The start time of the transcribed item in seconds, with millisecond precision (e.g., 1.056) */
  startTime?: number;
  /** The end time of the transcribed item in seconds, with millisecond precision (e.g., 1.056) */
  endTime?: number;
  /** The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION. */
  type?: TypeAmazonTranscribeServiceOperationsApi;
  /** The word or punctuation that was transcribed. */
  content?: string;
  /**
   * Indicates whether the specified item matches a word in the vocabulary filter included in your
   * request. If true, there is a vocabulary filter match.
   */
  vocabularyFilterMatch?: boolean;
  /** If speaker partitioning is enabled, Speaker labels the speaker of the specified item. */
  speaker?: string;
  /**
   * The confidence score associated with a word or phrase in your transcript. Confidence scores are
   * values between 0 and 1. A larger value indicates a higher probability that the identified item
   * correctly matches the item spoken in your media.
   */
  confidence?: number;
  /**
   * If partial result stabilization is enabled, Stable indicates whether the specified item is
   * stable (true) or if it may change when the segment is complete (false).
   */
  stable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemSchema: Schema<Item> = s.object<Item>(
  {
    startTime: s.optional(s.float64()),
    endTime: s.optional(s.float64()),
    type: s.optional(s.lazy(() => typeAmazonTranscribeServiceOperationsApiSchema)),
    content: s.optional(s.string()),
    vocabularyFilterMatch: s.optional(s.boolean()),
    speaker: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    stable: s.optional(s.boolean()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
      type: "Type",
      content: "Content",
      vocabularyFilterMatch: "VocabularyFilterMatch",
      speaker: "Speaker",
      confidence: "Confidence",
      stable: "Stable",
    },
  },
  { additionalProperties: s.json() },
);
