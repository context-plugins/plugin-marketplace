import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExpandRazorpayTransfersApi = {
  RecipientSettlement: "recipient_settlement",
} as const;
export type ExpandRazorpayTransfersApi =
  | (typeof ExpandRazorpayTransfersApi)[keyof typeof ExpandRazorpayTransfersApi]
  | (string & {});

export const expandRazorpayTransfersApiSchema: EnumSchema<ExpandRazorpayTransfersApi> =
  s.enumOf<ExpandRazorpayTransfersApi>(ExpandRazorpayTransfersApi);
