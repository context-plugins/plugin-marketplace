import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeLanguageCode1 = {
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
export type XAmznTranscribeLanguageCode1 =
  | (typeof XAmznTranscribeLanguageCode1)[keyof typeof XAmznTranscribeLanguageCode1]
  | (string & {});

export const xAmznTranscribeLanguageCode1Schema: EnumSchema<XAmznTranscribeLanguageCode1> =
  s.enumOf<XAmznTranscribeLanguageCode1>(XAmznTranscribeLanguageCode1);
