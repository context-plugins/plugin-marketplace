import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SegmentStats = {
  /** The average open rate of the subscribers in the segment. */
  openRate: number;
  /** The total number of emails sent to the subscribers in the segment. */
  totalSent: number;
  /** The percentage of subscribers in this segment who are premium in any tier. */
  percentagePremiumSubscribers: number;
  /**
   * The percentage of subscribers in this segment who have referred at least one other subscriber.
   */
  percentageSubscribersWithReferrals: number;
  /** The total number of unique emails clicked by subscribers in the segment. */
  uniqueEmailsClicked: number;
  /** The total number of emails delivered to subscribers in the segment. */
  totalDelivered: number;
  /** The total number of referrals from subscribers in the segment. */
  totalReferrals: number;
  /** The percentage of subscribers in this segment who have unsubscribed. */
  unsubscribedRate: number;
  /** The total number of subscribers in the segment. */
  totalSubscribers: number;
  /** The average clickthrough rate of the subscribers in the segment. */
  clickthroughRate: number;
  /** The total number of subscribers in the segment who are unsubscribed. */
  unsubscribedCount: number;
  /** The total number of unique emails opened by subscribers in the segment. */
  uniqueEmailsOpened: number;
  /** The total number of premium subscribers in the segment. */
  premiumSubscribers: number;
  /** The average number of referrals per subscriber in the segment. */
  averageReferralsPerSubscriber: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentStatsSchema: Schema<SegmentStats> = s.object<SegmentStats>(
  {
    openRate: s.float64(),
    totalSent: s.int(),
    percentagePremiumSubscribers: s.float64(),
    percentageSubscribersWithReferrals: s.float64(),
    uniqueEmailsClicked: s.int(),
    totalDelivered: s.int(),
    totalReferrals: s.int(),
    unsubscribedRate: s.float64(),
    totalSubscribers: s.int(),
    clickthroughRate: s.float64(),
    unsubscribedCount: s.int(),
    uniqueEmailsOpened: s.int(),
    premiumSubscribers: s.int(),
    averageReferralsPerSubscriber: s.float64(),
    _keysMap: {
      openRate: "open_rate",
      totalSent: "total_sent",
      percentagePremiumSubscribers: "percentage_premium_subscribers",
      percentageSubscribersWithReferrals: "percentage_subscribers_with_referrals",
      uniqueEmailsClicked: "unique_emails_clicked",
      totalDelivered: "total_delivered",
      totalReferrals: "total_referrals",
      unsubscribedRate: "unsubscribed_rate",
      totalSubscribers: "total_subscribers",
      clickthroughRate: "clickthrough_rate",
      unsubscribedCount: "unsubscribed_count",
      uniqueEmailsOpened: "unique_emails_opened",
      premiumSubscribers: "premium_subscribers",
      averageReferralsPerSubscriber: "average_referrals_per_subscriber",
    },
  },
  { additionalProperties: s.json() },
);
