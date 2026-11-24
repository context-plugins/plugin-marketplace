import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the retrieval. */
export const RetrievalStatus = {
  Scheduled: "SCHEDULED",
  Running: "RUNNING",
  Complete: "COMPLETE",
  Failed: "FAILED",
  Cancelled: "CANCELLED",
  Timeout: "TIMEOUT",
} as const;
export type RetrievalStatus = (typeof RetrievalStatus)[keyof typeof RetrievalStatus] | (string & {});

export const retrievalStatusSchema: EnumSchema<RetrievalStatus> = s.enumOf<RetrievalStatus>(RetrievalStatus);
