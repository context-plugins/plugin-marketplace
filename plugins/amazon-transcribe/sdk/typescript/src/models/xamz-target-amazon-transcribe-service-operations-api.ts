import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceOperationsApi = {
  TranscribeListTagsForResource: "Transcribe.ListTagsForResource",
} as const;
export type XAmzTargetAmazonTranscribeServiceOperationsApi =
  | (typeof XAmzTargetAmazonTranscribeServiceOperationsApi)[keyof typeof XAmzTargetAmazonTranscribeServiceOperationsApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceOperationsApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceOperationsApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceOperationsApi>(XAmzTargetAmazonTranscribeServiceOperationsApi);
