import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceVocabulariesApi = {
  TranscribeDeleteVocabulary: "Transcribe.DeleteVocabulary",
} as const;
export type XAmzTarget1AmazonTranscribeServiceVocabulariesApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceVocabulariesApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceVocabulariesApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceVocabulariesApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceVocabulariesApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceVocabulariesApi>(
    XAmzTarget1AmazonTranscribeServiceVocabulariesApi,
  );
