import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The language code you selected for your custom language model. */
export const LanguageCode1AmazonTranscribeServiceLanguageModelApi = {
  EnUs: "en-US",
  HiIn: "hi-IN",
  EsUs: "es-US",
  EnGb: "en-GB",
  EnAu: "en-AU",
  DeDe: "de-DE",
  JaJp: "ja-JP",
} as const;
export type LanguageCode1AmazonTranscribeServiceLanguageModelApi =
  | (typeof LanguageCode1AmazonTranscribeServiceLanguageModelApi)[keyof typeof LanguageCode1AmazonTranscribeServiceLanguageModelApi]
  | (string & {});

export const languageCode1AmazonTranscribeServiceLanguageModelApiSchema: EnumSchema<LanguageCode1AmazonTranscribeServiceLanguageModelApi> =
  s.enumOf<LanguageCode1AmazonTranscribeServiceLanguageModelApi>(
    LanguageCode1AmazonTranscribeServiceLanguageModelApi,
  );
