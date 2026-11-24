import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi = {
  TranscribeListCallAnalyticsJobs: "Transcribe.ListCallAnalyticsJobs",
} as const;
export type XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi>(
    XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi,
  );
