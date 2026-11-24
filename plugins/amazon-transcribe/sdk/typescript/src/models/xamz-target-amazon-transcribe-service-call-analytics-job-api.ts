import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi = {
  TranscribeDeleteCallAnalyticsJob: "Transcribe.DeleteCallAnalyticsJob",
} as const;
export type XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi =
  | (typeof XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi)[keyof typeof XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi>(
    XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi,
  );
