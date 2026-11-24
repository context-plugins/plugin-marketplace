import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Subscription lifecycle status. created→authenticated (mandate
 * authorized)→active→completed/cancelled/expired. pending=charge retry scheduled; halted=multiple
 * failures; paused=temporarily stopped.
 */
export const StatusRazorpaySubscriptionsApi = {
  Created: "created",
  Authenticated: "authenticated",
  Active: "active",
  Pending: "pending",
  Halted: "halted",
  Cancelled: "cancelled",
  Completed: "completed",
  Expired: "expired",
  Paused: "paused",
} as const;
export type StatusRazorpaySubscriptionsApi =
  | (typeof StatusRazorpaySubscriptionsApi)[keyof typeof StatusRazorpaySubscriptionsApi]
  | (string & {});

export const statusRazorpaySubscriptionsApiSchema: EnumSchema<StatusRazorpaySubscriptionsApi> =
  s.enumOf<StatusRazorpaySubscriptionsApi>(StatusRazorpaySubscriptionsApi);
