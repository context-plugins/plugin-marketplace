import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayXPayoutLinksApi = {
  PayoutLink: "payout_link",
} as const;
export type EntityRazorpayXPayoutLinksApi =
  | (typeof EntityRazorpayXPayoutLinksApi)[keyof typeof EntityRazorpayXPayoutLinksApi]
  | (string & {});

export const entityRazorpayXPayoutLinksApiSchema: EnumSchema<EntityRazorpayXPayoutLinksApi> =
  s.enumOf<EntityRazorpayXPayoutLinksApi>(EntityRazorpayXPayoutLinksApi);
