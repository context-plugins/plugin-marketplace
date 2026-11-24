import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonTranscribeServiceOperationsApiSchema,
  type TypeAmazonTranscribeServiceOperationsApi,
} from "./type-amazon-transcribe-service-operations-api.js";

export type MedicalItem = {
  /** The start time, in seconds, of the transcribed item. */
  startTime?: number;
  /** The end time, in seconds, of the transcribed item. */
  endTime?: number;
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
  /** If speaker partitioning is enabled, Speaker labels the speaker of the specified item. */
  speaker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalItemSchema: Schema<MedicalItem> = s.object<MedicalItem>(
  {
    startTime: s.optional(s.float64()),
    endTime: s.optional(s.float64()),
    type: s.optional(s.lazy(() => typeAmazonTranscribeServiceOperationsApiSchema)),
    content: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    speaker: s.optional(s.string()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
      type: "Type",
      content: "Content",
      confidence: "Confidence",
      speaker: "Speaker",
    },
  },
  { additionalProperties: s.json() },
);
