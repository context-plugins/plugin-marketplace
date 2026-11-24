import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi = {
  TranscribeListTranscriptionJobs: "Transcribe.ListTranscriptionJobs",
} as const;
export type XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi>(
    XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi,
  );
