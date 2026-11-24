import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** pending: being processed. processed: credited to customer. failed: refund failed. */
export const StatusRazorpayRefundsApi = {
  Pending: "pending",
  Processed: "processed",
  Failed: "failed",
} as const;
export type StatusRazorpayRefundsApi =
  | (typeof StatusRazorpayRefundsApi)[keyof typeof StatusRazorpayRefundsApi]
  | (string & {});

export const statusRazorpayRefundsApiSchema: EnumSchema<StatusRazorpayRefundsApi> =
  s.enumOf<StatusRazorpayRefundsApi>(StatusRazorpayRefundsApi);
