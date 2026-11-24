import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonTranscribeServiceLanguageModelApi = {
  TranscribeUpdateLanguageModel: "Transcribe.UpdateLanguageModel",
} as const;
export type XAmzTarget4AmazonTranscribeServiceLanguageModelApi =
  | (typeof XAmzTarget4AmazonTranscribeServiceLanguageModelApi)[keyof typeof XAmzTarget4AmazonTranscribeServiceLanguageModelApi]
  | (string & {});

export const xAmzTarget4AmazonTranscribeServiceLanguageModelApiSchema: EnumSchema<XAmzTarget4AmazonTranscribeServiceLanguageModelApi> =
  s.enumOf<XAmzTarget4AmazonTranscribeServiceLanguageModelApi>(
    XAmzTarget4AmazonTranscribeServiceLanguageModelApi,
  );
