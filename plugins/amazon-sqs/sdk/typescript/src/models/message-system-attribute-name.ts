import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageSystemAttributeName = {
  All: "All",
  SenderId: "SenderId",
  SentTimestamp: "SentTimestamp",
  ApproximateReceiveCount: "ApproximateReceiveCount",
  ApproximateFirstReceiveTimestamp: "ApproximateFirstReceiveTimestamp",
  SequenceNumber: "SequenceNumber",
  MessageDeduplicationId: "MessageDeduplicationId",
  MessageGroupId: "MessageGroupId",
  AwsTraceHeader: "AWSTraceHeader",
  DeadLetterQueueSourceArn: "DeadLetterQueueSourceArn",
} as const;
export type MessageSystemAttributeName =
  | (typeof MessageSystemAttributeName)[keyof typeof MessageSystemAttributeName]
  | (string & {});

export const messageSystemAttributeNameSchema: EnumSchema<MessageSystemAttributeName> =
  s.enumOf<MessageSystemAttributeName>(MessageSystemAttributeName);
