import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Savings Plan lifecycle state. Values match the AWS Savings Plans API in snake_case. */
export const State = {
  PendingReturn: "pending_return",
  Returning: "returning",
  Active: "active",
  Expired: "expired",
  Queued: "queued",
  QueuedReturning: "queued_returning",
  PaymentFailed: "payment_failed",
  PaymentPending: "payment_pending",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
