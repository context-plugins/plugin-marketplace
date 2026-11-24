import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Total number of active free and premium subscriptions */
export type ActiveSubscriptionCount = number | boolean;

export const activeSubscriptionCountSchema: Schema<ActiveSubscriptionCount> = s.of<ActiveSubscriptionCount>(
  s.union([s.int(), s.boolean()]),
);
