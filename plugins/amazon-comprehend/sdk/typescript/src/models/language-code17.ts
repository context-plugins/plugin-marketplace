import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language of the input documents. You can specify any of the primary languages supported by
 * Amazon Comprehend. If your request includes the endpoint for a custom entity recognition model,
 * Amazon Comprehend uses the language of your custom model, and it ignores any language code that
 * you specify here. All input documents must be in the same language.
 */
export const LanguageCode17 = {
  En: "en",
  Es: "es",
  Fr: "fr",
  De: "de",
  It: "it",
  Pt: "pt",
  Ar: "ar",
  Hi: "hi",
  Ja: "ja",
  Ko: "ko",
  Zh: "zh",
  ZhTw: "zh-TW",
} as const;
export type LanguageCode17 = (typeof LanguageCode17)[keyof typeof LanguageCode17] | (string & {});

export const languageCode17Schema: EnumSchema<LanguageCode17> = s.enumOf<LanguageCode17>(LanguageCode17);
