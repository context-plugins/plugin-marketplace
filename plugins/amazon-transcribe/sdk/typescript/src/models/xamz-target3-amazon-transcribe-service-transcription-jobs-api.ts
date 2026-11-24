import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi = {
  TranscribeStartTranscriptionJob: "Transcribe.StartTranscriptionJob",
} as const;
export type XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const xAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi>(
    XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi,
  );
