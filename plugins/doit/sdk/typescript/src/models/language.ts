import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The user's preferred language. */
export const Language = {
  En: "en",
  Ja: "ja",
} as const;
export type Language = (typeof Language)[keyof typeof Language] | (string & {});

export const languageSchema: EnumSchema<Language> = s.enumOf<Language>(Language);
