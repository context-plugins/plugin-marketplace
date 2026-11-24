import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCodeSchema, type LanguageCode } from "./language-code.js";

export type DetectKeyPhrasesRequest = {
  /** A UTF-8 text string. The string must contain less than 100 KB of UTF-8 encoded characters. */
  text: string;
  /**
   * The language of the input documents. You can specify any of the primary languages supported by
   * Amazon Comprehend. All documents must be in the same language.
   */
  languageCode: LanguageCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectKeyPhrasesRequestSchema: Schema<DetectKeyPhrasesRequest> =
  s.object<DetectKeyPhrasesRequest>(
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
