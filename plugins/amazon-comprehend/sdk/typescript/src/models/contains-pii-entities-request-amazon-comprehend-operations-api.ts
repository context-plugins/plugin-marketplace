import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCodeAmazonComprehendOperationsApiSchema,
  type LanguageCodeAmazonComprehendOperationsApi,
} from "./language-code-amazon-comprehend-operations-api.js";

export type ContainsPiiEntitiesRequestAmazonComprehendOperationsApi = {
  /** A UTF-8 text string. The maximum string size is 100 KB. */
  text: string;
  /** The language of the input documents. */
  languageCode: LanguageCodeAmazonComprehendOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const containsPiiEntitiesRequestAmazonComprehendOperationsApiSchema: Schema<ContainsPiiEntitiesRequestAmazonComprehendOperationsApi> =
  s.object<ContainsPiiEntitiesRequestAmazonComprehendOperationsApi>(
    {
      text: s.string(),
      languageCode: languageCodeAmazonComprehendOperationsApiSchema,
      _keysMap: {
        text: "Text",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
