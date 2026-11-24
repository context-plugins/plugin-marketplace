import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayPaymentLinksApi = {
  PaymentLink: "payment_link",
} as const;
export type EntityRazorpayPaymentLinksApi =
  | (typeof EntityRazorpayPaymentLinksApi)[keyof typeof EntityRazorpayPaymentLinksApi]
  | (string & {});

export const entityRazorpayPaymentLinksApiSchema: EnumSchema<EntityRazorpayPaymentLinksApi> =
  s.enumOf<EntityRazorpayPaymentLinksApi>(EntityRazorpayPaymentLinksApi);
