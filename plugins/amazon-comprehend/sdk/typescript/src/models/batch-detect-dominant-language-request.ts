import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchDetectDominantLanguageRequest = {
  /**
   * A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum
   * of 25 documents. Each document should contain at least 20 characters. The maximum size of each
   * document is 5 KB.
   */
  textList: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectDominantLanguageRequestSchema: Schema<BatchDetectDominantLanguageRequest> =
  s.object<BatchDetectDominantLanguageRequest>(
    {
      textList: s.array(s.string()),
      _keysMap: {
        textList: "TextList",
      },
    },
    { additionalProperties: s.json() },
  );
