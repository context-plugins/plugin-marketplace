import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language code that represents the language of your model. Each custom language model must
 * contain terms in only one language, and the language you select for your custom language model
 * must match the language of your training and tuning data. For a list of supported languages and
 * their associated language codes, refer to the Supported languages table. Note that US English
 * (en-US) is the only language supported with Amazon Transcribe Medical. A custom language model
 * can only be used to transcribe files in the same language as the model. For example, if you
 * create a custom language model usi
 */
export const LanguageCodeAmazonTranscribeServiceLanguageModelApi = {
  EnUs: "en-US",
  HiIn: "hi-IN",
  EsUs: "es-US",
  EnGb: "en-GB",
  EnAu: "en-AU",
  DeDe: "de-DE",
  JaJp: "ja-JP",
} as const;
export type LanguageCodeAmazonTranscribeServiceLanguageModelApi =
  | (typeof LanguageCodeAmazonTranscribeServiceLanguageModelApi)[keyof typeof LanguageCodeAmazonTranscribeServiceLanguageModelApi]
  | (string & {});

export const languageCodeAmazonTranscribeServiceLanguageModelApiSchema: EnumSchema<LanguageCodeAmazonTranscribeServiceLanguageModelApi> =
  s.enumOf<LanguageCodeAmazonTranscribeServiceLanguageModelApi>(
    LanguageCodeAmazonTranscribeServiceLanguageModelApi,
  );
