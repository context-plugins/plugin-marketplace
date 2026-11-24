import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CallAnalyticsEntity = {
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the
   * identified entity.
   */
  beginOffsetMillis?: number;
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the end of the identified
   * entity.
   */
  endOffsetMillis?: number;
  /** The category of information identified. For example, PII. */
  category?: string;
  /** The type of PII identified. For example, NAME or CREDIT_DEBIT_NUMBER. */
  type?: string;
  /** The word or words that represent the identified entity. */
  content?: string;
  /**
   * The confidence score associated with the identification of an entity in your transcript.
   * Confidence scores are values between 0 and 1. A larger value indicates a higher probability
   * that the identified entity correctly matches the entity spoken in your media.
   */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callAnalyticsEntitySchema: Schema<CallAnalyticsEntity> = s.object<CallAnalyticsEntity>(
  {
    beginOffsetMillis: s.optional(s.int()),
    endOffsetMillis: s.optional(s.int()),
    category: s.optional(s.string()),
    type: s.optional(s.string()),
    content: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    _keysMap: {
      beginOffsetMillis: "BeginOffsetMillis",
      endOffsetMillis: "EndOffsetMillis",
      category: "Category",
      type: "Type",
      content: "Content",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
