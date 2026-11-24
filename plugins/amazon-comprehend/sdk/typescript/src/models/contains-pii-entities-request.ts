import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode5Schema, type LanguageCode5 } from "./language-code5.js";

export type ContainsPiiEntitiesRequest = {
  /** A UTF-8 text string. The maximum string size is 100 KB. */
  text: string;
  /** The language of the input documents. */
  languageCode: LanguageCode5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const containsPiiEntitiesRequestSchema: Schema<ContainsPiiEntitiesRequest> =
  s.object<ContainsPiiEntitiesRequest>(
    {
      text: s.string(),
      languageCode: languageCode5Schema,
      _keysMap: {
        text: "Text",
        languageCode: "LanguageCode",
      },
    },
    { additionalProperties: s.json() },
  );
