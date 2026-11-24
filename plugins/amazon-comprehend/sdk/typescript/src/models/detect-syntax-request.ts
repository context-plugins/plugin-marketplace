import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode21Schema, type LanguageCode21 } from "./language-code21.js";

export type DetectSyntaxRequest = {
  /** A UTF-8 string. The maximum string size is 5 KB. */
  text: string;
  /**
   * The language code of the input documents. You can specify any of the following languages
   * supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   * Italian ("it"), or Portuguese ("pt").
   */
  languageCode: LanguageCode21;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectSyntaxRequestSchema: Schema<DetectSyntaxRequest> = s.object<DetectSyntaxRequest>(
  {
    text: s.string(),
    languageCode: languageCode21Schema,
    _keysMap: {
      text: "Text",
      languageCode: "LanguageCode",
    },
  },
  { additionalProperties: s.json() },
);
