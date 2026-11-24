import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRazorpayXPayoutsApi = {
  Queued: "queued",
  Pending: "pending",
  Rejected: "rejected",
  Processing: "processing",
  Processed: "processed",
  Cancelled: "cancelled",
  Reversed: "reversed",
  Failed: "failed",
} as const;
export type StatusRazorpayXPayoutsApi =
  | (typeof StatusRazorpayXPayoutsApi)[keyof typeof StatusRazorpayXPayoutsApi]
  | (string & {});

export const statusRazorpayXPayoutsApiSchema: EnumSchema<StatusRazorpayXPayoutsApi> =
  s.enumOf<StatusRazorpayXPayoutsApi>(StatusRazorpayXPayoutsApi);
