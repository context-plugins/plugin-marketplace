import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Session language, used to launch HPP with desired language. */
export const LanguageCode = {
  Ar: "ar",
  En: "en",
} as const;
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode] | (string & {});

export const languageCodeSchema: EnumSchema<LanguageCode> = s.enumOf<LanguageCode>(LanguageCode);
