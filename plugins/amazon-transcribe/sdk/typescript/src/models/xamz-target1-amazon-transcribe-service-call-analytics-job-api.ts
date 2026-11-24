import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi = {
  TranscribeGetCallAnalyticsJob: "Transcribe.GetCallAnalyticsJob",
} as const;
export type XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi>(
    XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi,
  );
