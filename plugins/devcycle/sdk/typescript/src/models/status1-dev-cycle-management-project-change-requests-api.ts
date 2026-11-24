import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1DevCycleManagementProjectChangeRequestsApi = {
  Draft: "draft",
  Pending: "pending",
  Approved: "approved",
  Applied: "applied",
  Rejected: "rejected",
  Cancelled: "cancelled",
} as const;
export type Status1DevCycleManagementProjectChangeRequestsApi =
  | (typeof Status1DevCycleManagementProjectChangeRequestsApi)[keyof typeof Status1DevCycleManagementProjectChangeRequestsApi]
  | (string & {});

export const status1DevCycleManagementProjectChangeRequestsApiSchema: EnumSchema<Status1DevCycleManagementProjectChangeRequestsApi> =
  s.enumOf<Status1DevCycleManagementProjectChangeRequestsApi>(
    Status1DevCycleManagementProjectChangeRequestsApi,
  );
