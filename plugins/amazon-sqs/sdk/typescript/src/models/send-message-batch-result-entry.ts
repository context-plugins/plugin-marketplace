import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SendMessageBatchResultEntry = {
  /** An identifier for the message in this batch. */
  id: string;
  /** An identifier for the message. */
  messageId: string;
  /**
   * An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify
   * that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before
   * creating the MD5 digest. For information about MD5, see RFC1321.
   */
  md5OfMessageBody: string;
  /**
   * An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to
   * verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message
   * before creating the MD5 digest. For information about MD5, see RFC1321.
   */
  md5OfMessageAttributes?: string;
  /**
   * An MD5 digest of the non-URL-encoded message system attribute string. You can use this
   * attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the
   * message before creating the MD5 digest. For information about MD5, see RFC1321.
   */
  md5OfMessageSystemAttributes?: string;
  /**
   * This parameter applies only to FIFO (first-in-first-out) queues. The large, non-consecutive
   * number that Amazon SQS assigns to each message. The length of SequenceNumber is 128 bits. As
   * SequenceNumber continues to increase for a particular MessageGroupId.
   */
  sequenceNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sendMessageBatchResultEntrySchema: Schema<SendMessageBatchResultEntry> =
  s.object<SendMessageBatchResultEntry>(
    {
      id: s.string(),
      messageId: s.string(),
      md5OfMessageBody: s.string(),
      md5OfMessageAttributes: s.optional(s.string()),
      md5OfMessageSystemAttributes: s.optional(s.string()),
      sequenceNumber: s.optional(s.string()),
      _keysMap: {
        id: "Id",
        messageId: "MessageId",
        md5OfMessageBody: "MD5OfMessageBody",
        md5OfMessageAttributes: "MD5OfMessageAttributes",
        md5OfMessageSystemAttributes: "MD5OfMessageSystemAttributes",
        sequenceNumber: "SequenceNumber",
      },
    },
    { additionalProperties: s.json() },
  );
