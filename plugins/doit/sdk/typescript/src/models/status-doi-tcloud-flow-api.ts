import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDoiTCloudFlowApi = {
  Pending: "pending",
  Running: "running",
  Complete: "complete",
  CompletedWithErrors: "completed-with-errors",
  PendingApproval: "pending-approval",
  Failed: "failed",
  Sleeping: "sleeping",
  Stopped: "stopped",
} as const;
export type StatusDoiTCloudFlowApi =
  | (typeof StatusDoiTCloudFlowApi)[keyof typeof StatusDoiTCloudFlowApi]
  | (string & {});

export const statusDoiTCloudFlowApiSchema: EnumSchema<StatusDoiTCloudFlowApi> =
  s.enumOf<StatusDoiTCloudFlowApi>(StatusDoiTCloudFlowApi);
