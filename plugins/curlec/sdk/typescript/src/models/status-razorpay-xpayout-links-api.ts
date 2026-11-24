import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRazorpayXPayoutLinksApi = {
  Pending: "pending",
  Issued: "issued",
  Processing: "processing",
  Processed: "processed",
  Cancelled: "cancelled",
  Rejected: "rejected",
} as const;
export type StatusRazorpayXPayoutLinksApi =
  | (typeof StatusRazorpayXPayoutLinksApi)[keyof typeof StatusRazorpayXPayoutLinksApi]
  | (string & {});

export const statusRazorpayXPayoutLinksApiSchema: EnumSchema<StatusRazorpayXPayoutLinksApi> =
  s.enumOf<StatusRazorpayXPayoutLinksApi>(StatusRazorpayXPayoutLinksApi);
