import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode3Schema, type LanguageCode3 } from "./language-code3.js";

export type BatchDetectSyntaxRequest = {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum
   * of 25 documents. The maximum size for each document is 5 KB.
   */
  textList: string[];
  /**
   * The language of the input documents. You can specify any of the following languages supported
   * by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian
   * ("it"), or Portuguese ("pt"). All documents must be in the same language.
   */
  languageCode: LanguageCode3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectSyntaxRequestSchema: Schema<BatchDetectSyntaxRequest> =
  s.object<BatchDetectSyntaxRequest>(
    {
      textList: s.array(s.string()),
      languageCode: languageCode3Schema,
      _keysMap: {
        textList: "TextList",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
