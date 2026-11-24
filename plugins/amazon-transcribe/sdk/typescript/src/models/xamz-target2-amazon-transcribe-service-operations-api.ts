import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceOperationsApi = {
  TranscribeUntagResource: "Transcribe.UntagResource",
} as const;
export type XAmzTarget2AmazonTranscribeServiceOperationsApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceOperationsApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceOperationsApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceOperationsApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceOperationsApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceOperationsApi>(XAmzTarget2AmazonTranscribeServiceOperationsApi);
