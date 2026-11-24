import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExpandRazorpayInstantSettlementsApi = {
  OndemandPayouts: "ondemand_payouts",
} as const;
export type ExpandRazorpayInstantSettlementsApi =
  | (typeof ExpandRazorpayInstantSettlementsApi)[keyof typeof ExpandRazorpayInstantSettlementsApi]
  | (string & {});

export const expandRazorpayInstantSettlementsApiSchema: EnumSchema<ExpandRazorpayInstantSettlementsApi> =
  s.enumOf<ExpandRazorpayInstantSettlementsApi>(ExpandRazorpayInstantSettlementsApi);
