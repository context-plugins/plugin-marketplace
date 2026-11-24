import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceOperationsApi = {
  TranscribeTagResource: "Transcribe.TagResource",
} as const;
export type XAmzTarget1AmazonTranscribeServiceOperationsApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceOperationsApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceOperationsApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceOperationsApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceOperationsApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceOperationsApi>(XAmzTarget1AmazonTranscribeServiceOperationsApi);
