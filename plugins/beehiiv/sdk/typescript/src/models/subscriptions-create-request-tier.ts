import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The tier for this subscription. */
export const SubscriptionsCreateRequestTier = {
  Free: "free",
  Premium: "premium",
} as const;
export type SubscriptionsCreateRequestTier =
  | (typeof SubscriptionsCreateRequestTier)[keyof typeof SubscriptionsCreateRequestTier]
  | (string & {});

export const subscriptionsCreateRequestTierSchema: EnumSchema<SubscriptionsCreateRequestTier> =
  s.enumOf<SubscriptionsCreateRequestTier>(SubscriptionsCreateRequestTier);
