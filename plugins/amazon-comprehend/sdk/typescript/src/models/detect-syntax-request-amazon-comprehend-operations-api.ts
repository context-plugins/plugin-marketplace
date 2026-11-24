import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode5AmazonComprehendOperationsApiSchema,
  type LanguageCode5AmazonComprehendOperationsApi,
} from "./language-code5-amazon-comprehend-operations-api.js";

export type DetectSyntaxRequestAmazonComprehendOperationsApi = {
  /** A UTF-8 string. The maximum string size is 5 KB. */
  text: string;
  /**
   * The language code of the input documents. You can specify any of the following languages
   * supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   * Italian ("it"), or Portuguese ("pt").
   */
  languageCode: LanguageCode5AmazonComprehendOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectSyntaxRequestAmazonComprehendOperationsApiSchema: Schema<DetectSyntaxRequestAmazonComprehendOperationsApi> =
  s.object<DetectSyntaxRequestAmazonComprehendOperationsApi>(
    {
      text: s.string(),
      languageCode: languageCode5AmazonComprehendOperationsApiSchema,
      _keysMap: {
        text: "Text",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
