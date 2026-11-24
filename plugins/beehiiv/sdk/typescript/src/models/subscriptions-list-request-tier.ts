import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionsListRequestTier = {
  Free: "free",
  Premium: "premium",
  All: "all",
} as const;
export type SubscriptionsListRequestTier =
  | (typeof SubscriptionsListRequestTier)[keyof typeof SubscriptionsListRequestTier]
  | (string & {});

export const subscriptionsListRequestTierSchema: EnumSchema<SubscriptionsListRequestTier> =
  s.enumOf<SubscriptionsListRequestTier>(SubscriptionsListRequestTier);
