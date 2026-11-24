import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audienceSizeStatus1Schema, type AudienceSizeStatus1 } from "./audience-size-status1.js";

/** The status of an audience size job. */
export type AudienceSizeJob = {
  jobId: string;
  /**
   * "pending": The job is running "success": The job is finished "failed": The job could not be
   * completed "cancelled": The job was cancelled before it finished
   */
  status: AudienceSizeStatus1;
  /** The size of the audience. Set if `status` is "success". */
  size: number | null;
  /** The timestamp when the job finished. Set if `status` is "success". */
  evaluatedAt: Date | null;
  /** The reason the job failed. Set if `status` is "failed". */
  error: string | null;
};

export const audienceSizeJobSchema: Schema<AudienceSizeJob> = s.object<AudienceSizeJob>({
  jobId: s.string(),
  status: audienceSizeStatus1Schema,
  size: s.nullable(s.float64()),
  evaluatedAt: s.nullable(s.dateTime()),
  error: s.nullable(s.string()),
});
