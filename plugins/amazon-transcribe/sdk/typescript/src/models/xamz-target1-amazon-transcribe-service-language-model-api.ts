import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceLanguageModelApi = {
  TranscribeDeleteLanguageModel: "Transcribe.DeleteLanguageModel",
} as const;
export type XAmzTarget1AmazonTranscribeServiceLanguageModelApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceLanguageModelApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceLanguageModelApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceLanguageModelApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceLanguageModelApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceLanguageModelApi>(
    XAmzTarget1AmazonTranscribeServiceLanguageModelApi,
  );
