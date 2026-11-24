import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the preferred language that you specified in your Call Analytics request. */
export const PreferredLanguage = {
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
export type PreferredLanguage = (typeof PreferredLanguage)[keyof typeof PreferredLanguage] | (string & {});

export const preferredLanguageSchema: EnumSchema<PreferredLanguage> =
  s.enumOf<PreferredLanguage>(PreferredLanguage);
