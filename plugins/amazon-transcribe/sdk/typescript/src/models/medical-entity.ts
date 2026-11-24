import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MedicalEntity = {
  /** The start time, in seconds, of the utterance that was identified as PHI. */
  startTime?: number;
  /** The end time, in seconds, of the utterance that was identified as PHI. */
  endTime?: number;
  /** The category of information identified. The only category is PHI. */
  category?: string;
  /** The word or words identified as PHI. */
  content?: string;
  /**
   * The confidence score associated with the identified PHI entity in your audio. Confidence scores
   * are values between 0 and 1. A larger value indicates a higher probability that the identified
   * entity correctly matches the entity spoken in your media.
   */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalEntitySchema: Schema<MedicalEntity> = s.object<MedicalEntity>(
  {
    startTime: s.optional(s.float64()),
    endTime: s.optional(s.float64()),
    category: s.optional(s.string()),
    content: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
      category: "Category",
      content: "Content",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
