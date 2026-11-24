import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Locale = {
  Pl: "pl",
  En: "en",
  De: "de",
} as const;
export type Locale = (typeof Locale)[keyof typeof Locale] | (string & {});

export const localeSchema: EnumSchema<Locale> = s.enumOf<Locale>(Locale);
