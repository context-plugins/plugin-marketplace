import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adaptiveMtTranslationSchema, type AdaptiveMtTranslation } from "./adaptive-mt-translation.js";

/** An AdaptiveMtTranslate response. */
export type AdaptiveMtTranslateResponse = {
  /** Output only. The translation's language code. */
  languageCode?: string;
  /**
   * Text translation response if a glossary is provided in the request. This could be the same as
   * 'translation' above if no terms apply.
   */
  glossaryTranslations?: AdaptiveMtTranslation[];
  /** Output only. The translation. */
  translations?: AdaptiveMtTranslation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adaptiveMtTranslateResponseSchema: Schema<AdaptiveMtTranslateResponse> =
  s.object<AdaptiveMtTranslateResponse>(
    {
      languageCode: s.optional(s.string()),
      glossaryTranslations: s.optional(s.array(s.lazy(() => adaptiveMtTranslationSchema))),
      translations: s.optional(s.array(s.lazy(() => adaptiveMtTranslationSchema))),
    },
    { additionalProperties: s.json() },
  );
