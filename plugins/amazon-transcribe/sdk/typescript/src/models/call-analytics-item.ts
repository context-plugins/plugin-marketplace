import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonTranscribeServiceOperationsApiSchema,
  type TypeAmazonTranscribeServiceOperationsApi,
} from "./type-amazon-transcribe-service-operations-api.js";

export type CallAnalyticsItem = {
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the
   * identified item.
   */
  beginOffsetMillis?: number;
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the end of the identified
   * item.
   */
  endOffsetMillis?: number;
  /** The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION. */
  type?: TypeAmazonTranscribeServiceOperationsApi;
  /** The word or punctuation that was transcribed. */
  content?: string;
  /**
   * The confidence score associated with a word or phrase in your transcript. Confidence scores are
   * values between 0 and 1. A larger value indicates a higher probability that the identified item
   * correctly matches the item spoken in your media.
   */
  confidence?: number;
  /**
   * Indicates whether the specified item matches a word in the vocabulary filter included in your
   * Call Analytics request. If true, there is a vocabulary filter match.
   */
  vocabularyFilterMatch?: boolean;
  /**
   * If partial result stabilization is enabled, Stable indicates whether the specified item is
   * stable (true) or if it may change when the segment is complete (false).
   */
  stable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callAnalyticsItemSchema: Schema<CallAnalyticsItem> = s.object<CallAnalyticsItem>(
  {
    beginOffsetMillis: s.optional(s.int()),
    endOffsetMillis: s.optional(s.int()),
    type: s.optional(s.lazy(() => typeAmazonTranscribeServiceOperationsApiSchema)),
    content: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    vocabularyFilterMatch: s.optional(s.boolean()),
    stable: s.optional(s.boolean()),
    _keysMap: {
      beginOffsetMillis: "BeginOffsetMillis",
      endOffsetMillis: "EndOffsetMillis",
      type: "Type",
      content: "Content",
      confidence: "Confidence",
      vocabularyFilterMatch: "VocabularyFilterMatch",
      stable: "Stable",
    },
  },
  { additionalProperties: s.json() },
);
