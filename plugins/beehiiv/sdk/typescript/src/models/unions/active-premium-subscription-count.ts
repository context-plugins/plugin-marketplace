import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Total number of active premium/paid subscriptions */
export type ActivePremiumSubscriptionCount = number | boolean;

export const activePremiumSubscriptionCountSchema: Schema<ActivePremiumSubscriptionCount> =
  s.of<ActivePremiumSubscriptionCount>(s.union([s.int(), s.boolean()]));
