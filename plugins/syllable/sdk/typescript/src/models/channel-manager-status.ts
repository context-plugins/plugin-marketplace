import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of an outbound communication request (voice, SMS, or email). */
export const ChannelManagerStatus = {
  Pending: "PENDING",
  Duplicate: "DUPLICATE",
  Invalid: "INVALID",
  UnexpectedError: "UNEXPECTED_ERROR",
  FilteredLineType: "FILTERED_LINE_TYPE",
  NoOutcome: "NO_OUTCOME",
  Processed: "PROCESSED",
  Dropped: "DROPPED",
  Deferred: "DEFERRED",
  Bounced: "BOUNCED",
  Delivered: "DELIVERED",
  Opened: "OPENED",
  Clicked: "CLICKED",
  SpamReport: "SPAM_REPORT",
  Unsubscribed: "UNSUBSCRIBED",
  PriorUnsubscribed: "PRIOR_UNSUBSCRIBED",
  PriorSpamReport: "PRIOR_SPAM_REPORT",
  PriorDropped: "PRIOR_DROPPED",
  PriorBounced: "PRIOR_BOUNCED",
  Sent: "SENT",
  Accepted: "ACCEPTED",
  Queued: "QUEUED",
  Sending: "SENDING",
  Undelivered: "UNDELIVERED",
  DeliveryUnknown: "DELIVERY_UNKNOWN",
  DeliveryFailed: "DELIVERY_FAILED",
  InProgress: "IN-PROGRESS",
  Busy: "BUSY",
  Canceled: "CANCELED",
  Completed: "COMPLETED",
  Declined: "DECLINED",
  NoAnswer: "NO-ANSWER",
  Machine: "MACHINE",
  Human: "HUMAN",
  Unknown: "UNKNOWN",
  Failed: "FAILED",
  SipNotFound: "SIP_NOT_FOUND",
  SipTemporarilyUnavailable: "SIP_TEMPORARILY_UNAVAILABLE",
  SipLoopDetected: "SIP_LOOP_DETECTED",
  SipDoesNotExistAnywhere: "SIP_DOES_NOT_EXIST_ANYWHERE",
} as const;
export type ChannelManagerStatus =
  | (typeof ChannelManagerStatus)[keyof typeof ChannelManagerStatus]
  | (string & {});

export const channelManagerStatusSchema: EnumSchema<ChannelManagerStatus> =
  s.enumOf<ChannelManagerStatus>(ChannelManagerStatus);
