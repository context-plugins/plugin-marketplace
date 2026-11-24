import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicationsGetRequestExpandItem = {
  Stats: "stats",
  StatActiveSubscriptions: "stat_active_subscriptions",
  StatActivePremiumSubscriptions: "stat_active_premium_subscriptions",
  StatActiveFreeSubscriptions: "stat_active_free_subscriptions",
  StatAverageOpenRate: "stat_average_open_rate",
  StatAverageClickRate: "stat_average_click_rate",
  StatTotalSent: "stat_total_sent",
  StatTotalUniqueOpened: "stat_total_unique_opened",
  StatTotalClicked: "stat_total_clicked",
} as const;
export type PublicationsGetRequestExpandItem =
  | (typeof PublicationsGetRequestExpandItem)[keyof typeof PublicationsGetRequestExpandItem]
  | (string & {});

export const publicationsGetRequestExpandItemSchema: EnumSchema<PublicationsGetRequestExpandItem> =
  s.enumOf<PublicationsGetRequestExpandItem>(PublicationsGetRequestExpandItem);
