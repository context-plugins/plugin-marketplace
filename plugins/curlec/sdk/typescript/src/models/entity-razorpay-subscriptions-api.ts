import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpaySubscriptionsApi = {
  Subscription: "subscription",
} as const;
export type EntityRazorpaySubscriptionsApi =
  | (typeof EntityRazorpaySubscriptionsApi)[keyof typeof EntityRazorpaySubscriptionsApi]
  | (string & {});

export const entityRazorpaySubscriptionsApiSchema: EnumSchema<EntityRazorpaySubscriptionsApi> =
  s.enumOf<EntityRazorpaySubscriptionsApi>(EntityRazorpaySubscriptionsApi);
