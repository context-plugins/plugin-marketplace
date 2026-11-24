import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonTranscribeServiceVocabulariesApi = {
  TranscribeUpdateVocabulary: "Transcribe.UpdateVocabulary",
} as const;
export type XAmzTarget4AmazonTranscribeServiceVocabulariesApi =
  | (typeof XAmzTarget4AmazonTranscribeServiceVocabulariesApi)[keyof typeof XAmzTarget4AmazonTranscribeServiceVocabulariesApi]
  | (string & {});

export const xAmzTarget4AmazonTranscribeServiceVocabulariesApiSchema: EnumSchema<XAmzTarget4AmazonTranscribeServiceVocabulariesApi> =
  s.enumOf<XAmzTarget4AmazonTranscribeServiceVocabulariesApi>(
    XAmzTarget4AmazonTranscribeServiceVocabulariesApi,
  );
