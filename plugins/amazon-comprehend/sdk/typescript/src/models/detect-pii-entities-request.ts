import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode19Schema, type LanguageCode19 } from "./language-code19.js";

export type DetectPiiEntitiesRequest = {
  /** A UTF-8 text string. The maximum string size is 100 KB. */
  text: string;
  /** The language of the input text. Enter the language code for English (en) or Spanish (es). */
  languageCode: LanguageCode19;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectPiiEntitiesRequestSchema: Schema<DetectPiiEntitiesRequest> =
  s.object<DetectPiiEntitiesRequest>(
    {
      text: s.string(),
      languageCode: languageCode19Schema,
      _keysMap: {
        text: "Text",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
