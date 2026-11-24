import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonTranscribeServiceOperationsApiSchema,
  type TypeAmazonTranscribeServiceOperationsApi,
} from "./type-amazon-transcribe-service-operations-api.js";

export type MedicalScribeTranscriptItem = {
  /** The start time, in milliseconds, of the transcribed item. */
  beginAudioTime?: number;
  /** The end time, in milliseconds, of the transcribed item. */
  endAudioTime?: number;
  /** The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION. */
  type?: TypeAmazonTranscribeServiceOperationsApi;
  /**
   * The confidence score associated with a word or phrase in your transcript. Confidence scores are
   * values between 0 and 1. A larger value indicates a higher probability that the identified item
   * correctly matches the item spoken in your media.
   */
  confidence?: number;
  /** The word, phrase or punctuation mark that was transcribed. */
  content?: string;
  /**
   * Indicates whether the specified item matches a word in the vocabulary filter included in your
   * configuration event. If true, there is a vocabulary filter match.
   */
  vocabularyFilterMatch?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeTranscriptItemSchema: Schema<MedicalScribeTranscriptItem> =
  s.object<MedicalScribeTranscriptItem>(
    {
      beginAudioTime: s.optional(s.float64()),
      endAudioTime: s.optional(s.float64()),
      type: s.optional(s.lazy(() => typeAmazonTranscribeServiceOperationsApiSchema)),
      confidence: s.optional(s.float64()),
      content: s.optional(s.string()),
      vocabularyFilterMatch: s.optional(s.boolean()),
      _keysMap: {
        beginAudioTime: "BeginAudioTime",
        endAudioTime: "EndAudioTime",
        type: "Type",
        confidence: "Confidence",
        content: "Content",
        vocabularyFilterMatch: "VocabularyFilterMatch",
      },
    },
    { additionalProperties: s.json() },
  );
