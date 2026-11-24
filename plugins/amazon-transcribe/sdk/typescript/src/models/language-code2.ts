import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language code used to create your custom language model. Each custom language model must
 * contain terms in only one language, and the language you select for your custom language model
 * must match the language of your training and tuning data. For a list of supported languages and
 * their associated language codes, refer to the Supported languages table. Note that US English
 * (en-US) is the only language supported with Amazon Transcribe Medical.
 */
export const LanguageCode2 = {
  EnUs: "en-US",
  HiIn: "hi-IN",
  EsUs: "es-US",
  EnGb: "en-GB",
  EnAu: "en-AU",
  DeDe: "de-DE",
  JaJp: "ja-JP",
} as const;
export type LanguageCode2 = (typeof LanguageCode2)[keyof typeof LanguageCode2] | (string & {});

export const languageCode2Schema: EnumSchema<LanguageCode2> = s.enumOf<LanguageCode2>(LanguageCode2);
