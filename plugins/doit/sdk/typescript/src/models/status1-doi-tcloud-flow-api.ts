import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current node status. */
export const Status1DoiTCloudFlowApi = {
  Pending: "pending",
  InProgress: "in-progress",
  Complete: "complete",
  CompletedWithErrors: "completed-with-errors",
  Failed: "failed",
  Rejected: "rejected",
  ApprovalTimedOut: "approval-timed-out",
  PendingApproval: "pending-approval",
  Sleeping: "sleeping",
  Skipped: "skipped",
  Stopped: "stopped",
} as const;
export type Status1DoiTCloudFlowApi =
  | (typeof Status1DoiTCloudFlowApi)[keyof typeof Status1DoiTCloudFlowApi]
  | (string & {});

export const status1DoiTCloudFlowApiSchema: EnumSchema<Status1DoiTCloudFlowApi> =
  s.enumOf<Status1DoiTCloudFlowApi>(Status1DoiTCloudFlowApi);
