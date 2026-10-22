import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RefundStatusResponse = {
  Queued: "queued",
  Pending: "pending",
  Processing: "processing",
  Refunded: "refunded",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type RefundStatusResponse =
  | (typeof RefundStatusResponse)[keyof typeof RefundStatusResponse]
  | (string & {});

export const refundStatusResponseSchema: EnumSchema<RefundStatusResponse> =
  s.enumOf<RefundStatusResponse>(RefundStatusResponse);
