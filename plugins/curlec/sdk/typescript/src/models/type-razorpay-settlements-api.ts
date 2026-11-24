import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeRazorpaySettlementsApi = {
  Payment: "payment",
  Refund: "refund",
  Transfer: "transfer",
  Adjustment: "adjustment",
} as const;
export type TypeRazorpaySettlementsApi =
  | (typeof TypeRazorpaySettlementsApi)[keyof typeof TypeRazorpaySettlementsApi]
  | (string & {});

export const typeRazorpaySettlementsApiSchema: EnumSchema<TypeRazorpaySettlementsApi> =
  s.enumOf<TypeRazorpaySettlementsApi>(TypeRazorpaySettlementsApi);
