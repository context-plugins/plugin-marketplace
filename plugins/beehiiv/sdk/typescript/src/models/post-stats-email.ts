import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Stats scoped only to email recipients. Not relevant for posts published only to web */
export type PostStatsEmail = {
  /** Total number of email recipients @default 0 */
  recipients?: number;
  /** Total number of emails delivered @default 0 */
  delivered?: number;
  /** Total number of email opens @default 0 */
  opens?: number;
  /** Total number of unique email opens @default 0 */
  uniqueOpens?: number;
  /** The percentage of emails that have been opened */
  openRate?: number;
  /** Total number of email clicks @default 0 */
  clicks?: number;
  /** Unique number of email clicks @default 0 */
  uniqueClicks?: number;
  /**
   * Total number of verified human email clicks across all URLs in this post. Verified clicks have
   * passed bot detection and are confirmed to be from real subscribers.
   *
   * @default 0
   */
  verifiedClicks?: number;
  /**
   * Unique number of verified human email clicks across all URLs in this post. Only counts the
   * first verified click per subscriber.
   *
   * @default 0
   */
  uniqueVerifiedClicks?: number;
  /** The percentage of emails that have been clicked */
  clickRate?: number;
  /** Total number of email unsubscribes @default 0 */
  unsubscribes?: number;
  /** The number of subscribers that reported this post email as spam @default 0 */
  spamReports?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postStatsEmailSchema: Schema<PostStatsEmail> = s.object<PostStatsEmail>(
  {
    recipients: s.defaulted(s.int(), 0),
    delivered: s.defaulted(s.int(), 0),
    opens: s.defaulted(s.int(), 0),
    uniqueOpens: s.defaulted(s.int(), 0),
    openRate: s.optional(s.float64()),
    clicks: s.defaulted(s.int(), 0),
    uniqueClicks: s.defaulted(s.int(), 0),
    verifiedClicks: s.defaulted(s.int(), 0),
    uniqueVerifiedClicks: s.defaulted(s.int(), 0),
    clickRate: s.optional(s.float64()),
    unsubscribes: s.defaulted(s.int(), 0),
    spamReports: s.defaulted(s.int(), 0),
    _keysMap: {
      uniqueOpens: "unique_opens",
      openRate: "open_rate",
      uniqueClicks: "unique_clicks",
      verifiedClicks: "verified_clicks",
      uniqueVerifiedClicks: "unique_verified_clicks",
      clickRate: "click_rate",
      spamReports: "spam_reports",
    },
  },
  { additionalProperties: s.json() },
);
