import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Language Code that you specified in your request. Same as provided in the
 * StartMedicalScribeStreamRequest.
 */
export const LanguageCode6 = {
  EnUs: "en-US",
} as const;
export type LanguageCode6 = (typeof LanguageCode6)[keyof typeof LanguageCode6] | (string & {});

export const languageCode6Schema: EnumSchema<LanguageCode6> = s.enumOf<LanguageCode6>(LanguageCode6);
