import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dominantLanguageSchema, type DominantLanguage } from "./dominant-language.js";

export type DetectDominantLanguageResponse = {
  /**
   * Array of languages that Amazon Comprehend detected in the input text. The array is sorted in
   * descending order of the score (the dominant language is always the first element in the array).
   * For each language, the response returns the RFC 5646 language code and the level of confidence
   * that Amazon Comprehend has in the accuracy of its inference. For more information about RFC
   * 5646, see Tags for Identifying Languages on the IETF Tools web site.
   */
  languages?: DominantLanguage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectDominantLanguageResponseSchema: Schema<DetectDominantLanguageResponse> =
  s.object<DetectDominantLanguageResponse>(
    {
      languages: s.optional(s.array(s.lazy(() => dominantLanguageSchema))),
      _keysMap: {
        languages: "Languages",
      },
    },
    { additionalProperties: s.json() },
  );
