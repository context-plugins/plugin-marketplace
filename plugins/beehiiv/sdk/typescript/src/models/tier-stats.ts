import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional list of stats for a tier. Retrievable by including `expand: [stats]` in the tier request
 * body.
 */
export type TierStats = {
  /** Total number of active subscriptions belonging to this tier. */
  activeSubscriptions: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tierStatsSchema: Schema<TierStats> = s.object<TierStats>(
  {
    activeSubscriptions: s.int(),
    _keysMap: {
      activeSubscriptions: "active_subscriptions",
    },
  },
  { additionalProperties: s.json() },
);
