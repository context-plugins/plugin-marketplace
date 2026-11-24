import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode1AmazonTranscribeServiceTranscriptionJobsApiSchema,
  type LanguageCode1AmazonTranscribeServiceTranscriptionJobsApi,
} from "./language-code1-amazon-transcribe-service-transcription-jobs-api.js";

export type LanguageCodeItem = {
  /** Provides the language code for each language identified in your media. */
  languageCode?: LanguageCode1AmazonTranscribeServiceTranscriptionJobsApi;
  /** Provides the total time, in seconds, each identified language is spoken in your media. */
  durationInSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const languageCodeItemSchema: Schema<LanguageCodeItem> = s.object<LanguageCodeItem>(
  {
    languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceTranscriptionJobsApiSchema)),
    durationInSeconds: s.optional(s.float64()),
    _keysMap: {
      languageCode: "LanguageCode",
      durationInSeconds: "DurationInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
