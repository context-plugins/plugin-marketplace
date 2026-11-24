import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language code of the identified language. */
export const LanguageCodeAmazonTranscribeServiceOperationsApi = {
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
export type LanguageCodeAmazonTranscribeServiceOperationsApi =
  | (typeof LanguageCodeAmazonTranscribeServiceOperationsApi)[keyof typeof LanguageCodeAmazonTranscribeServiceOperationsApi]
  | (string & {});

export const languageCodeAmazonTranscribeServiceOperationsApiSchema: EnumSchema<LanguageCodeAmazonTranscribeServiceOperationsApi> =
  s.enumOf<LanguageCodeAmazonTranscribeServiceOperationsApi>(
    LanguageCodeAmazonTranscribeServiceOperationsApi,
  );
