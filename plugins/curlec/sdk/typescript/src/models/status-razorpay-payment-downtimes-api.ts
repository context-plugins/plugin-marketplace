import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRazorpayPaymentDowntimesApi = {
  Scheduled: "scheduled",
  Started: "started",
  Resolved: "resolved",
  Updated: "updated",
} as const;
export type StatusRazorpayPaymentDowntimesApi =
  | (typeof StatusRazorpayPaymentDowntimesApi)[keyof typeof StatusRazorpayPaymentDowntimesApi]
  | (string & {});

export const statusRazorpayPaymentDowntimesApiSchema: EnumSchema<StatusRazorpayPaymentDowntimesApi> =
  s.enumOf<StatusRazorpayPaymentDowntimesApi>(StatusRazorpayPaymentDowntimesApi);
