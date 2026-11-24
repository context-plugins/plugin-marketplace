import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alternativeSchema, type Alternative } from "./alternative.js";
import {
  languageCode4AmazonTranscribeServiceOperationsApiSchema,
  type LanguageCode4AmazonTranscribeServiceOperationsApi,
} from "./language-code4-amazon-transcribe-service-operations-api.js";
import { languageWithScoreSchema, type LanguageWithScore } from "./language-with-score.js";

export type Result = {
  /** Provides a unique identifier for the Result. */
  resultId?: string;
  /** The start time of the Result in seconds, with millisecond precision (e.g., 1.056). */
  startTime?: number;
  /** The end time of the Result in seconds, with millisecond precision (e.g., 1.056). */
  endTime?: number;
  /**
   * Indicates if the segment is complete. If IsPartial is true, the segment is not complete. If
   * IsPartial is false, the segment is complete.
   */
  isPartial?: boolean;
  /**
   * A list of possible alternative transcriptions for the input audio. Each alternative may contain
   * one or more of Items, Entities, or Transcript.
   */
  alternatives?: Alternative[];
  /** Indicates which audio channel is associated with the Result. */
  channelId?: string;
  /** The language code that represents the language spoken in your audio stream. */
  languageCode?: LanguageCode4AmazonTranscribeServiceOperationsApi;
  /**
   * The language code of the dominant language identified in your stream. If you enabled channel
   * identification and each channel of your audio contains a different language, you may have more
   * than one result.
   */
  languageIdentification?: LanguageWithScore[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    resultId: s.optional(s.string()),
    startTime: s.optional(s.float64()),
    endTime: s.optional(s.float64()),
    isPartial: s.optional(s.boolean()),
    alternatives: s.optional(s.array(s.lazy(() => alternativeSchema))),
    channelId: s.optional(s.string()),
    languageCode: s.optional(s.lazy(() => languageCode4AmazonTranscribeServiceOperationsApiSchema)),
    languageIdentification: s.optional(s.array(s.lazy(() => languageWithScoreSchema))),
    _keysMap: {
      resultId: "ResultId",
      startTime: "StartTime",
      endTime: "EndTime",
      isPartial: "IsPartial",
      alternatives: "Alternatives",
      channelId: "ChannelId",
      languageCode: "LanguageCode",
      languageIdentification: "LanguageIdentification",
    },
  },
  { additionalProperties: s.json() },
);
