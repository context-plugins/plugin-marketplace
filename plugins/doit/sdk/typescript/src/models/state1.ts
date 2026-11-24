import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reserved Instance state, tracking the AWS EC2 Reserved Instance API verbatim in external
 * snake_case form. Differs from Savings Plan states by design. For example, the terminal state is
 * `retired` here vs `expired` on Savings Plans.
 */
export const State1 = {
  Active: "active",
  Retired: "retired",
  PaymentPending: "payment_pending",
  PaymentFailed: "payment_failed",
  Queued: "queued",
  QueuedDeleted: "queued_deleted",
} as const;
export type State1 = (typeof State1)[keyof typeof State1] | (string & {});

export const state1Schema: EnumSchema<State1> = s.enumOf<State1>(State1);
