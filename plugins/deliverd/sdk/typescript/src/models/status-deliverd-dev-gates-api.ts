import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevGatesApi = {
  Allowed: "allowed",
  Denied: "denied",
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  ChangesRequested: "changes_requested",
  Expired: "expired",
  Cancelled: "cancelled",
  Revoked: "revoked",
  Used: "used",
} as const;
export type StatusDeliverdDevGatesApi =
  | (typeof StatusDeliverdDevGatesApi)[keyof typeof StatusDeliverdDevGatesApi]
  | (string & {});

export const statusDeliverdDevGatesApiSchema: EnumSchema<StatusDeliverdDevGatesApi> =
  s.enumOf<StatusDeliverdDevGatesApi>(StatusDeliverdDevGatesApi);
