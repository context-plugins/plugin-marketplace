import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language code for the language of the documents that the classifier was trained on. */
export const LanguageCode9 = {
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
export type LanguageCode9 = (typeof LanguageCode9)[keyof typeof LanguageCode9] | (string & {});

export const languageCode9Schema: EnumSchema<LanguageCode9> = s.enumOf<LanguageCode9>(LanguageCode9);
