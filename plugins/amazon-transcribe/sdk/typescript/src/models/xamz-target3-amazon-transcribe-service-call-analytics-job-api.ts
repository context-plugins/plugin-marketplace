import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi = {
  TranscribeStartCallAnalyticsJob: "Transcribe.StartCallAnalyticsJob",
} as const;
export type XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi =
  | (typeof XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi)[keyof typeof XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi]
  | (string & {});

export const xAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiSchema: EnumSchema<XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi> =
  s.enumOf<XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi>(
    XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi,
  );
