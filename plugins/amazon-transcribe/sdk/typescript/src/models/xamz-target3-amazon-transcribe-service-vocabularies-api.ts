import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonTranscribeServiceVocabulariesApi = {
  TranscribeListVocabularies: "Transcribe.ListVocabularies",
} as const;
export type XAmzTarget3AmazonTranscribeServiceVocabulariesApi =
  | (typeof XAmzTarget3AmazonTranscribeServiceVocabulariesApi)[keyof typeof XAmzTarget3AmazonTranscribeServiceVocabulariesApi]
  | (string & {});

export const xAmzTarget3AmazonTranscribeServiceVocabulariesApiSchema: EnumSchema<XAmzTarget3AmazonTranscribeServiceVocabulariesApi> =
  s.enumOf<XAmzTarget3AmazonTranscribeServiceVocabulariesApi>(
    XAmzTarget3AmazonTranscribeServiceVocabulariesApi,
  );
