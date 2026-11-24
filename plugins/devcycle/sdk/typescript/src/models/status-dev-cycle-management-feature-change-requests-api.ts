import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the Feature */
export const StatusDevCycleManagementFeatureChangeRequestsApi = {
  Draft: "draft",
  Pending: "pending",
  Approved: "approved",
  Applied: "applied",
  Rejected: "rejected",
  Cancelled: "cancelled",
} as const;
export type StatusDevCycleManagementFeatureChangeRequestsApi =
  | (typeof StatusDevCycleManagementFeatureChangeRequestsApi)[keyof typeof StatusDevCycleManagementFeatureChangeRequestsApi]
  | (string & {});

export const statusDevCycleManagementFeatureChangeRequestsApiSchema: EnumSchema<StatusDevCycleManagementFeatureChangeRequestsApi> =
  s.enumOf<StatusDevCycleManagementFeatureChangeRequestsApi>(
    StatusDevCycleManagementFeatureChangeRequestsApi,
  );
