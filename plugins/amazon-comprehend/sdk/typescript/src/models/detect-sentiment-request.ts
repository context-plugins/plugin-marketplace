import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCodeSchema, type LanguageCode } from "./language-code.js";

export type DetectSentimentRequest = {
  /** A UTF-8 text string. The maximum string size is 5 KB. */
  text: string;
  /**
   * The language of the input documents. You can specify any of the primary languages supported by
   * Amazon Comprehend. All documents must be in the same language.
   */
  languageCode: LanguageCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectSentimentRequestSchema: Schema<DetectSentimentRequest> = s.object<DetectSentimentRequest>(
  {
    text: s.string(),
    languageCode: languageCodeSchema,
    _keysMap: {
      text: "Text",
      languageCode: "LanguageCode",
    },
  },
  { additionalProperties: s.json() },
);
