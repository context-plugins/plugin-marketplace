import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provides the status of your Call Analytics job. If the status is COMPLETED, the job is finished
 * and you can find the results at the location specified in TranscriptFileUri (or
 * RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED,
 * FailureReason provides details on why your transcription job failed.
 */
export const CallAnalyticsJobStatus1 = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type CallAnalyticsJobStatus1 =
  | (typeof CallAnalyticsJobStatus1)[keyof typeof CallAnalyticsJobStatus1]
  | (string & {});

export const callAnalyticsJobStatus1Schema: EnumSchema<CallAnalyticsJobStatus1> =
  s.enumOf<CallAnalyticsJobStatus1>(CallAnalyticsJobStatus1);
