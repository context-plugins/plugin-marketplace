import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi = {
  TranscribeUpdateVocabularyFilter: "Transcribe.UpdateVocabularyFilter",
} as const;
export type XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi =
  | (typeof XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi)[keyof typeof XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi]
  | (string & {});

export const xAmzTarget4AmazonTranscribeServiceVocabularyFilterApiSchema: EnumSchema<XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi> =
  s.enumOf<XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi>(
    XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi,
  );
