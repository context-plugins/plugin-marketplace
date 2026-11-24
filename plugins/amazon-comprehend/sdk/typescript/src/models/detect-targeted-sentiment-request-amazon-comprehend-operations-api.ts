import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode6AmazonComprehendOperationsApiSchema,
  type LanguageCode6AmazonComprehendOperationsApi,
} from "./language-code6-amazon-comprehend-operations-api.js";

export type DetectTargetedSentimentRequestAmazonComprehendOperationsApi = {
  /** A UTF-8 text string. The maximum string length is 5 KB. */
  text: string;
  /** The language of the input documents. Currently, English is the only supported language. */
  languageCode: LanguageCode6AmazonComprehendOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectTargetedSentimentRequestAmazonComprehendOperationsApiSchema: Schema<DetectTargetedSentimentRequestAmazonComprehendOperationsApi> =
  s.object<DetectTargetedSentimentRequestAmazonComprehendOperationsApi>(
    {
      text: s.string(),
      languageCode: languageCode6AmazonComprehendOperationsApiSchema,
      _keysMap: {
        text: "Text",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
