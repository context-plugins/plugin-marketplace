import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SupportedLocale = {
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
export type SupportedLocale = (typeof SupportedLocale)[keyof typeof SupportedLocale] | (string & {});

export const supportedLocaleSchema: EnumSchema<SupportedLocale> = s.enumOf<SupportedLocale>(SupportedLocale);
