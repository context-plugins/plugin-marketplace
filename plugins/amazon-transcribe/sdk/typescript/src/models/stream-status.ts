import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The streaming status of the HealthScribe streaming session. Possible Values: IN_PROGRESS PAUSED
 * FAILED COMPLETED This status is specific to real-time streaming. A COMPLETED status doesn't mean
 * that the post-stream analytics is complete. To get status of an analytics result, check the
 * Status field for the analytics result within the MedicalScribePostStreamAnalyticsResult. For
 * example, you can view the status of the ClinicalNoteGenerationResult.
 */
export const StreamStatus = {
  InProgress: "IN_PROGRESS",
  Paused: "PAUSED",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus] | (string & {});

export const streamStatusSchema: EnumSchema<StreamStatus> = s.enumOf<StreamStatus>(StreamStatus);
