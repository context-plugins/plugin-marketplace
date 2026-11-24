import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeLanguageCode = {
  EnUs: "en-US",
} as const;
export type XAmznTranscribeLanguageCode =
  | (typeof XAmznTranscribeLanguageCode)[keyof typeof XAmznTranscribeLanguageCode]
  | (string & {});

export const xAmznTranscribeLanguageCodeSchema: EnumSchema<XAmznTranscribeLanguageCode> =
  s.enumOf<XAmznTranscribeLanguageCode>(XAmznTranscribeLanguageCode);
