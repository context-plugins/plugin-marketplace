import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceLanguageModelApi = {
  TranscribeCreateLanguageModel: "Transcribe.CreateLanguageModel",
} as const;
export type XAmzTargetAmazonTranscribeServiceLanguageModelApi =
  | (typeof XAmzTargetAmazonTranscribeServiceLanguageModelApi)[keyof typeof XAmzTargetAmazonTranscribeServiceLanguageModelApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceLanguageModelApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceLanguageModelApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceLanguageModelApi>(
    XAmzTargetAmazonTranscribeServiceLanguageModelApi,
  );
