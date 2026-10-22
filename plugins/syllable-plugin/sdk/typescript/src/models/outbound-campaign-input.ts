import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { daysOfWeekEnumSchema, type DaysOfWeekEnum } from "./days-of-week-enum.js";
import {
  outboundCampaignWebhookInputSchema,
  type OutboundCampaignWebhookInput,
} from "./outbound-campaign-webhook-input.js";
import { allowedLineTypesSchema, type AllowedLineTypes } from "./unions/allowed-line-types.js";
import { callerIdSchema, type CallerId } from "./unions/caller-id.js";
import { dailyEndTimeSchema, type DailyEndTime } from "./unions/daily-end-time.js";
import { dailyStartTimeSchema, type DailyStartTime } from "./unions/daily-start-time.js";
import { description27Schema, type Description27 } from "./unions/description27.js";
import { label9Schema, type Label9 } from "./unions/label9.js";
import { labels3Schema, type Labels3 } from "./unions/labels3.js";
import { maxDailyCallsSchema, type MaxDailyCalls } from "./unions/max-daily-calls.js";
import { mode1Schema, type Mode1 } from "./unions/mode1.js";
import {
  outreachOverrideRules1Schema,
  type OutreachOverrideRules1,
} from "./unions/outreach-override-rules1.js";
import { retryIntervalSchema, type RetryInterval } from "./unions/retry-interval.js";
import { smsSessionTtlSchema, type SmsSessionTtl } from "./unions/sms-session-ttl.js";
import { source1Schema, type Source1 } from "./unions/source1.js";
import { targetFilters1Schema, type TargetFilters1 } from "./unions/target-filters1.js";
import { voicemailDetectionSchema, type VoicemailDetection } from "./unions/voicemail-detection.js";

export type OutboundCampaignInput = {
  /** Human readable name of campaign */
  campaignName: string;
  /** Description of campaign */
  description?: Description27;
  /** Mode of the campaign (e.g. voice, sms, email) */
  mode?: Mode1;
  /** Time to live for SMS session in minutes */
  smsSessionTtl?: SmsSessionTtl;
  /**
   * Label for campaign (DEPRECATED - use labels instead)
   *
   * @deprecated
   */
  label?: Label9;
  /** Labels for campaign */
  labels?: Labels3;
  /** Variables for campaign */
  campaignVariables: Record<string, string>;
  /** Start time of campaign each day */
  dailyStartTime?: DailyStartTime;
  /** End time of campaign each day */
  dailyEndTime?: DailyEndTime;
  /** Source phone number, email, or SMS number */
  source?: Source1;
  /** Caller ID for call */
  callerId: CallerId;
  /** Target number of outreach calls per hour @default 1 */
  hourlyRate?: number;
  /** Maximum number of outreach calls per day */
  maxDailyCalls?: MaxDailyCalls;
  /** Number of retries per target @default 0 */
  retryCount?: number;
  /** How long to wait before retrying */
  retryInterval?: RetryInterval;
  /** Days of the week when campaign is active */
  activeDays: DaysOfWeekEnum[];
  /**
   * Weekday- and date-specific outreach windows and daily maximums. The most specific rule wins:
   * date, then weekday, then the campaign defaults above. Omitted or null means the campaign
   * defaults apply to every active day.
   */
  outreachOverrideRules?: OutreachOverrideRules1;
  /** Config for voicemail detection for voice campaigns. Set to None to disable. */
  voicemailDetection?: VoicemailDetection;
  /**
   * Line-type buckets this campaign is allowed to dial. Empty or omitted means no filter (all line
   * types are dialed).
   */
  allowedLineTypes?: AllowedLineTypes;
  /**
   * When a line-type filter is active, whether to also dial numbers whose line type is unknown or
   * could not be classified. Has no effect when allowed_line_types is empty.
   *
   * @default true
   */
  includeUnknownLineTypes?: boolean;
  /**
   * Generic target filter (a flat rule list over request enrichment attributes such as line_type,
   * caller_type, caller_name, carrier_name, mcc, mnc). When set, takes precedence over
   * allowed_line_types / include_unknown_line_types. Omitted or null means those legacy fields are
   * used instead. Rules on caller_type / caller_name are resolved by Twilio's separately billed
   * caller_name (CNAM) lookup, which only returns data for US numbers.
   */
  targetFilters?: TargetFilters1;
  /** Webhooks for campaign */
  webhooks?: OutboundCampaignWebhookInput[];
};

export const outboundCampaignInputSchema: Schema<OutboundCampaignInput> = s.object<OutboundCampaignInput>({
  campaignName: s.string(),
  description: s.optional(s.lazy(() => description27Schema)),
  mode: s.optional(s.lazy(() => mode1Schema)),
  smsSessionTtl: s.optional(s.lazy(() => smsSessionTtlSchema)),
  label: s.optional(s.lazy(() => label9Schema)),
  labels: s.optional(s.lazy(() => labels3Schema)),
  campaignVariables: s.record(s.string(), s.string()),
  dailyStartTime: s.optional(s.lazy(() => dailyStartTimeSchema)),
  dailyEndTime: s.optional(s.lazy(() => dailyEndTimeSchema)),
  source: s.optional(s.lazy(() => source1Schema)),
  callerId: callerIdSchema,
  hourlyRate: s.defaulted(s.int(), 1),
  maxDailyCalls: s.optional(s.lazy(() => maxDailyCallsSchema)),
  retryCount: s.defaulted(s.int(), 0),
  retryInterval: s.optional(s.lazy(() => retryIntervalSchema)),
  activeDays: s.array(s.lazy(() => daysOfWeekEnumSchema)),
  outreachOverrideRules: s.optional(s.lazy(() => outreachOverrideRules1Schema)),
  voicemailDetection: s.optional(s.lazy(() => voicemailDetectionSchema)),
  allowedLineTypes: s.optional(s.lazy(() => allowedLineTypesSchema)),
  includeUnknownLineTypes: s.defaulted(s.boolean(), true),
  targetFilters: s.optional(s.lazy(() => targetFilters1Schema)),
  webhooks: s.optional(s.array(s.lazy(() => outboundCampaignWebhookInputSchema))),
  _keysMap: {
    campaignName: "campaign_name",
    smsSessionTtl: "sms_session_ttl",
    campaignVariables: "campaign_variables",
    dailyStartTime: "daily_start_time",
    dailyEndTime: "daily_end_time",
    callerId: "caller_id",
    hourlyRate: "hourly_rate",
    maxDailyCalls: "max_daily_calls",
    retryCount: "retry_count",
    retryInterval: "retry_interval",
    activeDays: "active_days",
    outreachOverrideRules: "outreach_override_rules",
    voicemailDetection: "voicemail_detection",
    allowedLineTypes: "allowed_line_types",
    includeUnknownLineTypes: "include_unknown_line_types",
    targetFilters: "target_filters",
  },
});
