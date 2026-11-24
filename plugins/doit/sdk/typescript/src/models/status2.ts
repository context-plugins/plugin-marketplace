import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status2 = {
  PendingReturn: "pending_return",
  Returning: "returning",
  Active: "active",
  Expired: "expired",
  Queued: "queued",
  QueuedReturning: "queued_returning",
  PaymentFailed: "payment_failed",
  PaymentPending: "payment_pending",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
