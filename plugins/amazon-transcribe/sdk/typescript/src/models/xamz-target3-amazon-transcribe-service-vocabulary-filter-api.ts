import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi = {
  TranscribeListVocabularyFilters: "Transcribe.ListVocabularyFilters",
} as const;
export type XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi =
  | (typeof XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi)[keyof typeof XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi]
  | (string & {});

export const xAmzTarget3AmazonTranscribeServiceVocabularyFilterApiSchema: EnumSchema<XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi> =
  s.enumOf<XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi>(
    XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi,
  );
