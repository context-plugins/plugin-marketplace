import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayXPayoutsApi = {
  Payout: "payout",
} as const;
export type EntityRazorpayXPayoutsApi =
  | (typeof EntityRazorpayXPayoutsApi)[keyof typeof EntityRazorpayXPayoutsApi]
  | (string & {});

export const entityRazorpayXPayoutsApiSchema: EnumSchema<EntityRazorpayXPayoutsApi> =
  s.enumOf<EntityRazorpayXPayoutsApi>(EntityRazorpayXPayoutsApi);
