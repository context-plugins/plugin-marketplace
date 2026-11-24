import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayPaymentDowntimesApi = {
  PaymentDowntime: "payment.downtime",
} as const;
export type EntityRazorpayPaymentDowntimesApi =
  | (typeof EntityRazorpayPaymentDowntimesApi)[keyof typeof EntityRazorpayPaymentDowntimesApi]
  | (string & {});

export const entityRazorpayPaymentDowntimesApiSchema: EnumSchema<EntityRazorpayPaymentDowntimesApi> =
  s.enumOf<EntityRazorpayPaymentDowntimesApi>(EntityRazorpayPaymentDowntimesApi);
