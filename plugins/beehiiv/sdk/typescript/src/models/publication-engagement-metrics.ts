import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationEngagementMetrics = {
  /**
   * The starting date of the period for which the engagement metrics are reported based on the
   * selected granularity.<br><br> `day` granularity: The specific day.<br> `week` granularity: The
   * Monday of the week.<br> `month` granularity: The first day of the month.
   */
  date: string;
  /** The total number of times emails were opened during the period. */
  totalOpens: number;
  /** The number of unique subscribers who opened emails during the period. */
  uniqueOpens: number;
  /** The total number of times links were clicked during the period. */
  totalClicks: number;
  /**
   * The total number of times links were clicked, during the period, as <a
   * href="https://www.beehiiv.com/support/article/28404633659159-introducing-verified-clicks-accurate-email-engagement-metrics?srsltid=AfmBOoregRzZ1N6bcwITVRA-Lo6NE06y6xNwb7WO85Gv0mrWMij-yFgb">verified
   * by our system</a>.
   */
  totalVerifiedClicks: number;
  /** The number of unique subscribers who clicked links during the period. */
  uniqueClicks: number;
  /**
   * The number of times links were clicked by unique subscribers, during the period, as <a
   * href="https://www.beehiiv.com/support/article/28404633659159-introducing-verified-clicks-accurate-email-engagement-metrics?srsltid=AfmBOoregRzZ1N6bcwITVRA-Lo6NE06y6xNwb7WO85Gv0mrWMij-yFgb">verified
   * by our system</a>.
   */
  uniqueVerifiedClicks: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationEngagementMetricsSchema: Schema<PublicationEngagementMetrics> =
  s.object<PublicationEngagementMetrics>(
    {
      date: s.dateOnly(),
      totalOpens: s.int(),
      uniqueOpens: s.int(),
      totalClicks: s.int(),
      totalVerifiedClicks: s.int(),
      uniqueClicks: s.int(),
      uniqueVerifiedClicks: s.int(),
      _keysMap: {
        totalOpens: "total_opens",
        uniqueOpens: "unique_opens",
        totalClicks: "total_clicks",
        totalVerifiedClicks: "total_verified_clicks",
        uniqueClicks: "unique_clicks",
        uniqueVerifiedClicks: "unique_verified_clicks",
      },
    },
    { additionalProperties: s.json() },
  );
