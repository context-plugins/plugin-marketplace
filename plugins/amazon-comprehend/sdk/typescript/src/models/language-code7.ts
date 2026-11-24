import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * You can specify any of the following languages: English ("en"), Spanish ("es"), French ("fr"),
 * Italian ("it"), German ("de"), or Portuguese ("pt"). If you plan to use this entity recognizer
 * with PDF, Word, or image input files, you must specify English as the language. All training
 * documents must be in the same language.
 */
export const LanguageCode7 = {
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
export type LanguageCode7 = (typeof LanguageCode7)[keyof typeof LanguageCode7] | (string & {});

export const languageCode7Schema: EnumSchema<LanguageCode7> = s.enumOf<LanguageCode7>(LanguageCode7);
