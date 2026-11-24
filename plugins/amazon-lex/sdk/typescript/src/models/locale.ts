import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the target locale for the bot. */
export const Locale = {
  DeDe: "de-DE",
  EnAu: "en-AU",
  EnGb: "en-GB",
  EnIn: "en-IN",
  EnUs: "en-US",
  Es419: "es-419",
  EsEs: "es-ES",
  EsUs: "es-US",
  FrFr: "fr-FR",
  FrCa: "fr-CA",
  ItIt: "it-IT",
  JaJp: "ja-JP",
  KoKr: "ko-KR",
} as const;
export type Locale = (typeof Locale)[keyof typeof Locale] | (string & {});

export const localeSchema: EnumSchema<Locale> = s.enumOf<Locale>(Locale);
