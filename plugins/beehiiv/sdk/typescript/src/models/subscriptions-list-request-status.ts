import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionsListRequestStatus = {
  Validating: "validating",
  Invalid: "invalid",
  Pending: "pending",
  Active: "active",
  Inactive: "inactive",
  All: "all",
} as const;
export type SubscriptionsListRequestStatus =
  | (typeof SubscriptionsListRequestStatus)[keyof typeof SubscriptionsListRequestStatus]
  | (string & {});

export const subscriptionsListRequestStatusSchema: EnumSchema<SubscriptionsListRequestStatus> =
  s.enumOf<SubscriptionsListRequestStatus>(SubscriptionsListRequestStatus);
