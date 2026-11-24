import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Language = {
  En: "en",
  Pl: "pl",
  Fr: "fr",
  Hi: "hi",
  Sv: "sv",
  De: "de",
  Es: "es",
  It: "it",
  Nl: "nl",
  Pt: "pt",
  Ru: "ru",
  Tr: "tr",
  Zh: "zh",
  Da: "da",
  Th: "th",
  Ko: "ko",
  He: "he",
  Ar: "ar",
} as const;
export type Language = (typeof Language)[keyof typeof Language] | (string & {});

export const languageSchema: EnumSchema<Language> = s.enumOf<Language>(Language);
