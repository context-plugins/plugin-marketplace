import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCodeSchema, type LanguageCode } from "./language-code.js";

export type BatchDetectEntitiesRequest = {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum
   * of 25 documents. The maximum size of each document is 5 KB.
   */
  textList: string[];
  /**
   * The language of the input documents. You can specify any of the primary languages supported by
   * Amazon Comprehend. All documents must be in the same language.
   */
  languageCode: LanguageCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectEntitiesRequestSchema: Schema<BatchDetectEntitiesRequest> =
  s.object<BatchDetectEntitiesRequest>(
    {
      textList: s.array(s.string()),
      languageCode: languageCodeSchema,
      _keysMap: {
        textList: "TextList",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
