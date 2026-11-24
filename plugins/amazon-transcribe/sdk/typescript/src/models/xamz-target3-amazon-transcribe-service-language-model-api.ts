import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonTranscribeServiceLanguageModelApi = {
  TranscribeListLanguageModels: "Transcribe.ListLanguageModels",
} as const;
export type XAmzTarget3AmazonTranscribeServiceLanguageModelApi =
  | (typeof XAmzTarget3AmazonTranscribeServiceLanguageModelApi)[keyof typeof XAmzTarget3AmazonTranscribeServiceLanguageModelApi]
  | (string & {});

export const xAmzTarget3AmazonTranscribeServiceLanguageModelApiSchema: EnumSchema<XAmzTarget3AmazonTranscribeServiceLanguageModelApi> =
  s.enumOf<XAmzTarget3AmazonTranscribeServiceLanguageModelApi>(
    XAmzTarget3AmazonTranscribeServiceLanguageModelApi,
  );
