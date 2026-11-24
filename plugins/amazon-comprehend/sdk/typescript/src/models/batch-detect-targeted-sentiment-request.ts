import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode4Schema, type LanguageCode4 } from "./language-code4.js";

export type BatchDetectTargetedSentimentRequest = {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum
   * of 25 documents. The maximum size of each document is 5 KB.
   */
  textList: string[];
  /** The language of the input documents. Currently, English is the only supported language. */
  languageCode: LanguageCode4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectTargetedSentimentRequestSchema: Schema<BatchDetectTargetedSentimentRequest> =
  s.object<BatchDetectTargetedSentimentRequest>(
    {
      textList: s.array(s.string()),
      languageCode: languageCode4Schema,
      _keysMap: {
        textList: "TextList",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
