import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestStatus2Schema, type RequestStatus2 } from "./request-status2.js";
import { channelManagerSidSchema, type ChannelManagerSid } from "./unions/channel-manager-sid.js";
import { channelManagerStatus1Schema, type ChannelManagerStatus1 } from "./unions/channel-manager-status1.js";
import { conversationIdSchema, type ConversationId } from "./unions/conversation-id.js";
import { enrichmentSchema, type Enrichment } from "./unions/enrichment.js";
import { insightsStatusSchema, type InsightsStatus } from "./unions/insights-status.js";
import { insightsSchema, type Insights } from "./unions/insights.js";
import { lineTypeSchema, type LineType } from "./unions/line-type.js";
import { sentAtSchema, type SentAt } from "./unions/sent-at.js";
import { sessionIdSchema, type SessionId } from "./unions/session-id.js";

export type CommunicationRequestResult = {
  /** ID for target outreach (unique within batch) */
  referenceId: string;
  /** Target phone number */
  target: string;
  /** Variables for request */
  requestVariables: Record<string, string>;
  /** Channel manager SID */
  channelManagerSid?: ChannelManagerSid;
  /** Timestamp of request creation */
  createdAt?: Date;
  /** Timestamp at which request was sent */
  sentAt?: SentAt;
  /** Number of attempts for request @default 0 */
  attemptCount?: number;
  /** Unique ID for call session */
  sessionId?: SessionId;
  /** Unique ID for conversation */
  conversationId?: ConversationId;
  /** Status of request */
  requestStatus?: RequestStatus2;
  /** Status of request in channel manager (see ChannelManagerStatus) */
  channelManagerStatus?: ChannelManagerStatus1;
  /** Status of session in insight workflow */
  insightsStatus?: InsightsStatus;
  /** Insights from call */
  insights?: Insights;
  /**
   * Raw Twilio Lookup v2 line type of the target number (e.g. 'mobile', 'landline', 'fixedVoip',
   * 'tollFree'); resolved at ingestion. 'unknown' means Twilio answered but could not determine the
   * line type; None means no lookup data at all. See ALL_LINE_TYPES in
   * lib/twilio/line_type_lookup.py for the full vocabulary.
   */
  lineType?: LineType;
  /**
   * Full Twilio Lookup v2 line_type_intelligence payload resolved at ingestion (line_type /
   * carrier_name / mcc / mnc / error_code). None when no lookup was performed.
   */
  enrichment?: Enrichment;
};

export const communicationRequestResultSchema: Schema<CommunicationRequestResult> =
  s.object<CommunicationRequestResult>({
    referenceId: s.string(),
    target: s.string(),
    requestVariables: s.record(s.string(), s.string()),
    channelManagerSid: s.optional(s.lazy(() => channelManagerSidSchema)),
    createdAt: s.optional(s.dateTime()),
    sentAt: s.optional(s.lazy(() => sentAtSchema)),
    attemptCount: s.defaulted(s.int(), 0),
    sessionId: s.optional(s.lazy(() => sessionIdSchema)),
    conversationId: s.optional(s.lazy(() => conversationIdSchema)),
    requestStatus: s.optional(s.lazy(() => requestStatus2Schema)),
    channelManagerStatus: s.optional(s.lazy(() => channelManagerStatus1Schema)),
    insightsStatus: s.optional(s.lazy(() => insightsStatusSchema)),
    insights: s.optional(s.lazy(() => insightsSchema)),
    lineType: s.optional(s.lazy(() => lineTypeSchema)),
    enrichment: s.optional(s.lazy(() => enrichmentSchema)),
    _keysMap: {
      referenceId: "reference_id",
      requestVariables: "request_variables",
      channelManagerSid: "channel_manager_sid",
      createdAt: "created_at",
      sentAt: "sent_at",
      attemptCount: "attempt_count",
      sessionId: "session_id",
      conversationId: "conversation_id",
      requestStatus: "request_status",
      channelManagerStatus: "channel_manager_status",
      insightsStatus: "insights_status",
      lineType: "line_type",
    },
  });
