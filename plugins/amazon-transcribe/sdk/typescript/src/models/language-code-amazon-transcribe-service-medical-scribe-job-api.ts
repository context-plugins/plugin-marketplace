import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language code used to create your Medical Scribe job. US English (en-US) is the only
 * supported language for Medical Scribe jobs.
 */
export const LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi = {
  EnUs: "en-US",
} as const;
export type LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi =
  | (typeof LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi)[keyof typeof LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi]
  | (string & {});

export const languageCodeAmazonTranscribeServiceMedicalScribeJobApiSchema: EnumSchema<LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi> =
  s.enumOf<LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi>(
    LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi,
  );
