import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Invoice lifecycle status. draft→issued→paid/partially_paid/cancelled/expired. */
export const StatusRazorpayInvoicesApi = {
  Draft: "draft",
  Issued: "issued",
  PartiallyPaid: "partially_paid",
  Paid: "paid",
  Cancelled: "cancelled",
  Expired: "expired",
  Deleted: "deleted",
} as const;
export type StatusRazorpayInvoicesApi =
  | (typeof StatusRazorpayInvoicesApi)[keyof typeof StatusRazorpayInvoicesApi]
  | (string & {});

export const statusRazorpayInvoicesApiSchema: EnumSchema<StatusRazorpayInvoicesApi> =
  s.enumOf<StatusRazorpayInvoicesApi>(StatusRazorpayInvoicesApi);
