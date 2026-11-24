import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  activeFreeSubscriptionCountSchema,
  type ActiveFreeSubscriptionCount,
} from "./unions/active-free-subscription-count.js";
import {
  activePremiumSubscriptionCountSchema,
  type ActivePremiumSubscriptionCount,
} from "./unions/active-premium-subscription-count.js";
import {
  activeSubscriptionCountSchema,
  type ActiveSubscriptionCount,
} from "./unions/active-subscription-count.js";
import { averageClickRateSchema, type AverageClickRate } from "./unions/average-click-rate.js";
import { averageOpenRateSchema, type AverageOpenRate } from "./unions/average-open-rate.js";
import { totalClicksSchema, type TotalClicks } from "./unions/total-clicks.js";
import { totalEmailsSentSchema, type TotalEmailsSent } from "./unions/total-emails-sent.js";
import { totalUniqueOpensSchema, type TotalUniqueOpens } from "./unions/total-unique-opens.js";

/**
 * Optional list of stats for a publication. Retrievable by including an `expand` array in the
 * publication request body. Add `"stats"` to the array to retrieve all, or add individual stats
 * (prefaced with `stat_`) to only retrieve specific ones.
 *
 * Examples: { "expand": ["stats"] }
 *
 * { "expand": ["stat_active_subscriptions", "stat_average_click_rate"] }
 */
export type PublicationStats = {
  /** Total number of active free and premium subscriptions */
  activeSubscriptions?: ActiveSubscriptionCount;
  /** Total number of active premium/paid subscriptions */
  activePremiumSubscriptions?: ActivePremiumSubscriptionCount;
  /** Total number of active free subscriptions */
  activeFreeSubscriptions?: ActiveFreeSubscriptionCount;
  /** The publications historical average open rate */
  averageOpenRate?: AverageOpenRate;
  /** The publications historical average click through rate */
  averageClickRate?: AverageClickRate;
  /** Total number of emails sent */
  totalSent?: TotalEmailsSent;
  /** Total number of uniquely opened emails. Only counts the first open for each subscriber. */
  totalUniqueOpened?: TotalUniqueOpens;
  /** The total number of links clicked from emails. */
  totalClicked?: TotalClicks;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationStatsSchema: Schema<PublicationStats> = s.object<PublicationStats>(
  {
    activeSubscriptions: s.optional(s.lazy(() => activeSubscriptionCountSchema)),
    activePremiumSubscriptions: s.optional(s.lazy(() => activePremiumSubscriptionCountSchema)),
    activeFreeSubscriptions: s.optional(s.lazy(() => activeFreeSubscriptionCountSchema)),
    averageOpenRate: s.optional(s.lazy(() => averageOpenRateSchema)),
    averageClickRate: s.optional(s.lazy(() => averageClickRateSchema)),
    totalSent: s.optional(s.lazy(() => totalEmailsSentSchema)),
    totalUniqueOpened: s.optional(s.lazy(() => totalUniqueOpensSchema)),
    totalClicked: s.optional(s.lazy(() => totalClicksSchema)),
    _keysMap: {
      activeSubscriptions: "active_subscriptions",
      activePremiumSubscriptions: "active_premium_subscriptions",
      activeFreeSubscriptions: "active_free_subscriptions",
      averageOpenRate: "average_open_rate",
      averageClickRate: "average_click_rate",
      totalSent: "total_sent",
      totalUniqueOpened: "total_unique_opened",
      totalClicked: "total_clicked",
    },
  },
  { additionalProperties: s.json() },
);
