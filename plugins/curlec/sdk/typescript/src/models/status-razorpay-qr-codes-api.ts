import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRazorpayQrCodesApi = {
  Active: "active",
  Closed: "closed",
} as const;
export type StatusRazorpayQrCodesApi =
  | (typeof StatusRazorpayQrCodesApi)[keyof typeof StatusRazorpayQrCodesApi]
  | (string & {});

export const statusRazorpayQrCodesApiSchema: EnumSchema<StatusRazorpayQrCodesApi> =
  s.enumOf<StatusRazorpayQrCodesApi>(StatusRazorpayQrCodesApi);
