import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageAttributeValueSchema, type MessageAttributeValue } from "./message-attribute-value.js";

export type Message = {
  /**
   * A unique identifier for the message. A MessageIdis considered unique across all Amazon Web
   * Services accounts for an extended period of time.
   */
  messageId?: string;
  /**
   * An identifier associated with the act of receiving the message. A new receipt handle is
   * returned every time you receive a message. When deleting a message, you provide the last
   * received receipt handle to delete the message.
   */
  receiptHandle?: string;
  /** An MD5 digest of the non-URL-encoded message body string. */
  md5OfBody?: string;
  /** The message's contents (not URL-encoded). */
  body?: string;
  /**
   * A map of the attributes requested in ReceiveMessage to their respective values. Supported
   * attributes: ApproximateReceiveCount ApproximateFirstReceiveTimestamp MessageDeduplicationId
   * MessageGroupId SenderId SentTimestamp SequenceNumber ApproximateFirstReceiveTimestamp and
   * SentTimestamp are each returned as an integer representing the epoch time in milliseconds.
   */
  attributes?: Record<string, string>;
  /**
   * An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to
   * verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message
   * before creating the MD5 digest. For information about MD5, see RFC1321.
   */
  md5OfMessageAttributes?: string;
  /**
   * Each message attribute consists of a Name, Type, and Value. For more information, see Amazon
   * SQS message attributes in the Amazon SQS Developer Guide.
   */
  messageAttributes?: Record<string, MessageAttributeValue>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageSchema: Schema<Message> = s.object<Message>(
  {
    messageId: s.optional(s.string()),
    receiptHandle: s.optional(s.string()),
    md5OfBody: s.optional(s.string()),
    body: s.optional(s.string()),
    attributes: s.optional(s.record(s.string(), s.string())),
    md5OfMessageAttributes: s.optional(s.string()),
    messageAttributes: s.optional(
      s.record(
        s.string(),
        s.lazy(() => messageAttributeValueSchema),
      ),
    ),
    _keysMap: {
      messageId: "MessageId",
      receiptHandle: "ReceiptHandle",
      md5OfBody: "MD5OfBody",
      body: "Body",
      attributes: "Attributes",
      md5OfMessageAttributes: "MD5OfMessageAttributes",
      messageAttributes: "MessageAttributes",
    },
  },
  { additionalProperties: s.json() },
);
