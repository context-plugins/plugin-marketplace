import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language of the input documents. */
export const LanguageCode5 = {
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
export type LanguageCode5 = (typeof LanguageCode5)[keyof typeof LanguageCode5] | (string & {});

export const languageCode5Schema: EnumSchema<LanguageCode5> = s.enumOf<LanguageCode5>(LanguageCode5);
