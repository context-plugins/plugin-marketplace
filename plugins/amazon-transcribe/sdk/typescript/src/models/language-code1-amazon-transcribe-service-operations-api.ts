import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language code that represents the language spoken in your audio stream. */
export const LanguageCode1AmazonTranscribeServiceOperationsApi = {
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
export type LanguageCode1AmazonTranscribeServiceOperationsApi =
  | (typeof LanguageCode1AmazonTranscribeServiceOperationsApi)[keyof typeof LanguageCode1AmazonTranscribeServiceOperationsApi]
  | (string & {});

export const languageCode1AmazonTranscribeServiceOperationsApiSchema: EnumSchema<LanguageCode1AmazonTranscribeServiceOperationsApi> =
  s.enumOf<LanguageCode1AmazonTranscribeServiceOperationsApi>(
    LanguageCode1AmazonTranscribeServiceOperationsApi,
  );
