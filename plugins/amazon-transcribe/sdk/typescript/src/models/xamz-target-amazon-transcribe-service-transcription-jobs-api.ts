import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi = {
  TranscribeDeleteTranscriptionJob: "Transcribe.DeleteTranscriptionJob",
} as const;
export type XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi>(
    XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi,
  );
