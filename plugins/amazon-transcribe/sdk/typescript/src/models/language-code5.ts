import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the language code that you specified in your Call Analytics request. */
export const LanguageCode5 = {
  EnUs: "en-US",
  EnGb: "en-GB",
  EsUs: "es-US",
  FrCa: "fr-CA",
  FrFr: "fr-FR",
  EnAu: "en-AU",
  ItIt: "it-IT",
  DeDe: "de-DE",
  PtBr: "pt-BR",
} as const;
export type LanguageCode5 = (typeof LanguageCode5)[keyof typeof LanguageCode5] | (string & {});

export const languageCode5Schema: EnumSchema<LanguageCode5> = s.enumOf<LanguageCode5>(LanguageCode5);
