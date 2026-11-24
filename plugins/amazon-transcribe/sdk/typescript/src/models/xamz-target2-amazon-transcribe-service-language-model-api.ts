import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceLanguageModelApi = {
  TranscribeDescribeLanguageModel: "Transcribe.DescribeLanguageModel",
} as const;
export type XAmzTarget2AmazonTranscribeServiceLanguageModelApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceLanguageModelApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceLanguageModelApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceLanguageModelApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceLanguageModelApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceLanguageModelApi>(
    XAmzTarget2AmazonTranscribeServiceLanguageModelApi,
  );
