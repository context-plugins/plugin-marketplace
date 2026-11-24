import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dominantLanguageSchema, type DominantLanguage } from "./dominant-language.js";

export type BatchDetectDominantLanguageItemResult = {
  /** The zero-based index of the document in the input list. */
  index?: number;
  /** One or more DominantLanguage objects describing the dominant languages in the document. */
  languages?: DominantLanguage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectDominantLanguageItemResultSchema: Schema<BatchDetectDominantLanguageItemResult> =
  s.object<BatchDetectDominantLanguageItemResult>(
    {
      index: s.optional(s.int()),
      languages: s.optional(s.array(s.lazy(() => dominantLanguageSchema))),
      _keysMap: {
        index: "Index",
        languages: "Languages",
      },
    },
    { additionalProperties: s.json() },
  );
