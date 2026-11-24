import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode3AmazonTranscribeServiceOperationsApiSchema,
  type LanguageCode3AmazonTranscribeServiceOperationsApi,
} from "./language-code3-amazon-transcribe-service-operations-api.js";

export type LanguageWithScore = {
  /** The language code of the identified language. */
  languageCode?: LanguageCode3AmazonTranscribeServiceOperationsApi;
  /**
   * The confidence score associated with the identified language code. Confidence scores are values
   * between zero and one; larger values indicate a higher confidence in the identified language.
   */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const languageWithScoreSchema: Schema<LanguageWithScore> = s.object<LanguageWithScore>(
  {
    languageCode: s.optional(s.lazy(() => languageCode3AmazonTranscribeServiceOperationsApiSchema)),
    score: s.optional(s.float64()),
    _keysMap: {
      languageCode: "LanguageCode",
      score: "Score",
    },
  },
  { additionalProperties: s.json() },
);
