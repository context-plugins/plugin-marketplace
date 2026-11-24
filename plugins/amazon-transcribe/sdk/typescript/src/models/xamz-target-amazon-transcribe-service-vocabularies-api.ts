import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceVocabulariesApi = {
  TranscribeCreateVocabulary: "Transcribe.CreateVocabulary",
} as const;
export type XAmzTargetAmazonTranscribeServiceVocabulariesApi =
  | (typeof XAmzTargetAmazonTranscribeServiceVocabulariesApi)[keyof typeof XAmzTargetAmazonTranscribeServiceVocabulariesApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceVocabulariesApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceVocabulariesApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceVocabulariesApi>(
    XAmzTargetAmazonTranscribeServiceVocabulariesApi,
  );
