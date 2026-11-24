import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Language code for the language that the model supports. */
export const LanguageCode8 = {
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
export type LanguageCode8 = (typeof LanguageCode8)[keyof typeof LanguageCode8] | (string & {});

export const languageCode8Schema: EnumSchema<LanguageCode8> = s.enumOf<LanguageCode8>(LanguageCode8);
