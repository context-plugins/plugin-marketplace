import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language of the input documents. Currently, English is the only supported language. */
export const LanguageCode4 = {
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
export type LanguageCode4 = (typeof LanguageCode4)[keyof typeof LanguageCode4] | (string & {});

export const languageCode4Schema: EnumSchema<LanguageCode4> = s.enumOf<LanguageCode4>(LanguageCode4);
