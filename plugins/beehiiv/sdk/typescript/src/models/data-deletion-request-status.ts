import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the data deletion request. */
export const DataDeletionRequestStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type DataDeletionRequestStatus =
  | (typeof DataDeletionRequestStatus)[keyof typeof DataDeletionRequestStatus]
  | (string & {});

export const dataDeletionRequestStatusSchema: EnumSchema<DataDeletionRequestStatus> =
  s.enumOf<DataDeletionRequestStatus>(DataDeletionRequestStatus);
