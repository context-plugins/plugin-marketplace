import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode4Schema, type LanguageCode4 } from "./language-code4.js";

export type DetectTargetedSentimentRequest = {
  /** A UTF-8 text string. The maximum string length is 5 KB. */
  text: string;
  /** The language of the input documents. Currently, English is the only supported language. */
  languageCode: LanguageCode4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectTargetedSentimentRequestSchema: Schema<DetectTargetedSentimentRequest> =
  s.object<DetectTargetedSentimentRequest>(
    {
      text: s.string(),
      languageCode: languageCode4Schema,
      _keysMap: {
        text: "Text",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
