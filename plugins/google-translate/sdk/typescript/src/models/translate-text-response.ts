import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { translationSchema, type Translation } from "./translation.js";

export type TranslateTextResponse = {
  /**
   * Text translation responses if a glossary is provided in the request. This can be the same as
   * `translations` if no terms apply. This field has the same length as `contents`.
   */
  glossaryTranslations?: Translation[];
  /**
   * Text translation responses with no glossary applied. This field has the same length as
   * `contents`.
   */
  translations?: Translation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const translateTextResponseSchema: Schema<TranslateTextResponse> = s.object<TranslateTextResponse>(
  {
    glossaryTranslations: s.optional(s.array(s.lazy(() => translationSchema))),
    translations: s.optional(s.array(s.lazy(() => translationSchema))),
  },
  { additionalProperties: s.json() },
);
