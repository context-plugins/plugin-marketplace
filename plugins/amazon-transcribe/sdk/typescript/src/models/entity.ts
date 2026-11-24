import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Entity = {
  /**
   * The start time of the utterance that was identified as PII in seconds, with millisecond
   * precision (e.g., 1.056)
   */
  startTime?: number;
  /**
   * The end time of the utterance that was identified as PII in seconds, with millisecond precision
   * (e.g., 1.056)
   */
  endTime?: number;
  /** The category of information identified. The only category is PII. */
  category?: string;
  /** The type of PII identified. For example, NAME or CREDIT_DEBIT_NUMBER. */
  type?: string;
  /** The word or words identified as PII. */
  content?: string;
  /**
   * The confidence score associated with the identified PII entity in your audio. Confidence scores
   * are values between 0 and 1. A larger value indicates a higher probability that the identified
   * entity correctly matches the entity spoken in your media.
   */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitySchema: Schema<Entity> = s.object<Entity>(
  {
    startTime: s.optional(s.float64()),
    endTime: s.optional(s.float64()),
    category: s.optional(s.string()),
    type: s.optional(s.string()),
    content: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
      category: "Category",
      type: "Type",
      content: "Content",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
