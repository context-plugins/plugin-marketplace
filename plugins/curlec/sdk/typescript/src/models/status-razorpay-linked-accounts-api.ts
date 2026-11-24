import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Account status. */
export const StatusRazorpayLinkedAccountsApi = {
  Created: "created",
  Suspended: "suspended",
} as const;
export type StatusRazorpayLinkedAccountsApi =
  | (typeof StatusRazorpayLinkedAccountsApi)[keyof typeof StatusRazorpayLinkedAccountsApi]
  | (string & {});

export const statusRazorpayLinkedAccountsApiSchema: EnumSchema<StatusRazorpayLinkedAccountsApi> =
  s.enumOf<StatusRazorpayLinkedAccountsApi>(StatusRazorpayLinkedAccountsApi);
