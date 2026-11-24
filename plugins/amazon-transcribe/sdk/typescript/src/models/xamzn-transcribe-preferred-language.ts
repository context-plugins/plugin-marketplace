import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribePreferredLanguage = {
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
export type XAmznTranscribePreferredLanguage =
  | (typeof XAmznTranscribePreferredLanguage)[keyof typeof XAmznTranscribePreferredLanguage]
  | (string & {});

export const xAmznTranscribePreferredLanguageSchema: EnumSchema<XAmznTranscribePreferredLanguage> =
  s.enumOf<XAmznTranscribePreferredLanguage>(XAmznTranscribePreferredLanguage);
