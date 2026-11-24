import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode3AmazonComprehendOperationsApiSchema,
  type LanguageCode3AmazonComprehendOperationsApi,
} from "./language-code3-amazon-comprehend-operations-api.js";

export type DetectPiiEntitiesRequestAmazonComprehendOperationsApi = {
  /** A UTF-8 text string. The maximum string size is 100 KB. */
  text: string;
  /** The language of the input text. Enter the language code for English (en) or Spanish (es). */
  languageCode: LanguageCode3AmazonComprehendOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectPiiEntitiesRequestAmazonComprehendOperationsApiSchema: Schema<DetectPiiEntitiesRequestAmazonComprehendOperationsApi> =
  s.object<DetectPiiEntitiesRequestAmazonComprehendOperationsApi>(
    {
      text: s.string(),
      languageCode: languageCode3AmazonComprehendOperationsApiSchema,
      _keysMap: {
        text: "Text",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
