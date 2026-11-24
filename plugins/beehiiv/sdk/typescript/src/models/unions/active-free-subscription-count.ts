import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Total number of active free subscriptions */
export type ActiveFreeSubscriptionCount = number | boolean;

export const activeFreeSubscriptionCountSchema: Schema<ActiveFreeSubscriptionCount> =
  s.of<ActiveFreeSubscriptionCount>(s.union([s.int(), s.boolean()]));
