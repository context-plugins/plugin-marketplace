import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi = {
  TranscribeGetTranscriptionJob: "Transcribe.GetTranscriptionJob",
} as const;
export type XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi>(
    XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi,
  );
