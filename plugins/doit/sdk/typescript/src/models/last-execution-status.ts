import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LastExecutionStatus = {
  Pending: "pending",
  Running: "running",
  Complete: "complete",
  PendingApproval: "pending-approval",
  Failed: "failed",
  Sleeping: "sleeping",
  Stopped: "stopped",
} as const;
export type LastExecutionStatus =
  | (typeof LastExecutionStatus)[keyof typeof LastExecutionStatus]
  | (string & {});

export const lastExecutionStatusSchema: EnumSchema<LastExecutionStatus> =
  s.enumOf<LastExecutionStatus>(LastExecutionStatus);
