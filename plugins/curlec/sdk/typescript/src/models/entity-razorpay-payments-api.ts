import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayPaymentsApi = {
  Payment: "payment",
} as const;
export type EntityRazorpayPaymentsApi =
  | (typeof EntityRazorpayPaymentsApi)[keyof typeof EntityRazorpayPaymentsApi]
  | (string & {});

export const entityRazorpayPaymentsApiSchema: EnumSchema<EntityRazorpayPaymentsApi> =
  s.enumOf<EntityRazorpayPaymentsApi>(EntityRazorpayPaymentsApi);
