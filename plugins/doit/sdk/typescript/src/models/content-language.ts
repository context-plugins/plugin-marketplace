import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentLanguage = {
  En: "en",
} as const;
export type ContentLanguage = (typeof ContentLanguage)[keyof typeof ContentLanguage] | (string & {});

export const contentLanguageSchema: EnumSchema<ContentLanguage> = s.enumOf<ContentLanguage>(ContentLanguage);
