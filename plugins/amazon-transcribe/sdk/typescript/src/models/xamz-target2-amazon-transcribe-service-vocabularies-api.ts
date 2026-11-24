import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceVocabulariesApi = {
  TranscribeGetVocabulary: "Transcribe.GetVocabulary",
} as const;
export type XAmzTarget2AmazonTranscribeServiceVocabulariesApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceVocabulariesApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceVocabulariesApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceVocabulariesApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceVocabulariesApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceVocabulariesApi>(
    XAmzTarget2AmazonTranscribeServiceVocabulariesApi,
  );
