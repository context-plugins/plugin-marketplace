import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCodeAmazonTranscribeServiceOperationsApiSchema,
  type LanguageCodeAmazonTranscribeServiceOperationsApi,
} from "./language-code-amazon-transcribe-service-operations-api.js";

export type CallAnalyticsLanguageWithScore = {
  /** The language code of the identified language. */
  languageCode?: LanguageCodeAmazonTranscribeServiceOperationsApi;
  /**
   * The confidence score associated with the identified language code. Confidence scores are values
   * between zero and one; larger values indicate a higher confidence in the identified language.
   */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callAnalyticsLanguageWithScoreSchema: Schema<CallAnalyticsLanguageWithScore> =
  s.object<CallAnalyticsLanguageWithScore>(
    {
      languageCode: s.optional(s.lazy(() => languageCodeAmazonTranscribeServiceOperationsApiSchema)),
      score: s.optional(s.float64()),
      _keysMap: {
        languageCode: "LanguageCode",
        score: "Score",
      },
    },
    { additionalProperties: s.json() },
  );
