import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode7AmazonComprehendOperationsApiSchema,
  type LanguageCode7AmazonComprehendOperationsApi,
} from "./language-code7-amazon-comprehend-operations-api.js";
import { textSegmentSchema, type TextSegment } from "./text-segment.js";

export type DetectToxicContentRequest = {
  /**
   * A list of up to 10 text strings. Each string has a maximum size of 1 KB, and the maximum size
   * of the list is 10 KB.
   */
  textSegments: TextSegment[];
  /** The language of the input text. Currently, English is the only supported language. */
  languageCode: LanguageCode7AmazonComprehendOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectToxicContentRequestSchema: Schema<DetectToxicContentRequest> =
  s.object<DetectToxicContentRequest>(
    {
      textSegments: s.array(s.lazy(() => textSegmentSchema)),
      languageCode: languageCode7AmazonComprehendOperationsApiSchema,
      _keysMap: {
        textSegments: "TextSegments",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
