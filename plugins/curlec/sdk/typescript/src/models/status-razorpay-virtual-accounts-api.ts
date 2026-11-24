import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** active = accepting payments; closed = no longer accepting payments. */
export const StatusRazorpayVirtualAccountsApi = {
  Active: "active",
  Closed: "closed",
} as const;
export type StatusRazorpayVirtualAccountsApi =
  | (typeof StatusRazorpayVirtualAccountsApi)[keyof typeof StatusRazorpayVirtualAccountsApi]
  | (string & {});

export const statusRazorpayVirtualAccountsApiSchema: EnumSchema<StatusRazorpayVirtualAccountsApi> =
  s.enumOf<StatusRazorpayVirtualAccountsApi>(StatusRazorpayVirtualAccountsApi);
