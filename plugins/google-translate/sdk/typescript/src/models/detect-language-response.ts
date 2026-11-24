import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detectedLanguageSchema, type DetectedLanguage } from "./detected-language.js";

/** The response message for language detection. */
export type DetectLanguageResponse = {
  /**
   * The most probable language detected by the Translation API. For each request, the Translation
   * API will always return only one result.
   */
  languages?: DetectedLanguage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLanguageResponseSchema: Schema<DetectLanguageResponse> = s.object<DetectLanguageResponse>(
  {
    languages: s.optional(s.array(s.lazy(() => detectedLanguageSchema))),
  },
  { additionalProperties: s.json() },
);
