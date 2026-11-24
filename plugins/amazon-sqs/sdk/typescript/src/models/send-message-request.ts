import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageAttributeValueSchema, type MessageAttributeValue } from "./message-attribute-value.js";
import {
  messageSystemAttributeValueSchema,
  type MessageSystemAttributeValue,
} from "./message-system-attribute-value.js";

export type SendMessageRequest = {
  /**
   * The URL of the Amazon SQS queue to which a message is sent. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /**
   * The message to send. The minimum size is one character. The maximum size is 1 MiB or 1,048,576
   * bytes A message can include only XML, JSON, and unformatted text. The following Unicode
   * characters are allowed. For more information, see the W3C specification for characters. #x9 |
   * #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains
   * characters outside the allowed set, Amazon SQS rejects the message and returns an
   * InvalidMessageContents error. Ensure that your message body includes only valid characters to
   * avoid this exception.
   */
  messageBody: string;
  /**
   * The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900.
   * Maximum: 15 minutes. Messages with a positive DelaySeconds value become available for
   * processing after the delay period is finished. If you don't specify a value, the default value
   * for the queue applies. When you set FifoQueue, you can't set DelaySeconds per message. You can
   * set this parameter only on a queue level.
   */
  delaySeconds?: number;
  /**
   * Each message attribute consists of a Name, Type, and Value. For more information, see Amazon
   * SQS message attributes in the Amazon SQS Developer Guide.
   */
  messageAttributes?: Record<string, MessageAttributeValue>;
  /**
   * The message system attribute to send. Each message system attribute consists of a Name, Type,
   * and Value. Currently, the only supported message system attribute is AWSTraceHeader. Its type
   * must be String and its value must be a correctly formatted X-Ray trace header string. The size
   * of a message system attribute doesn't count towards the total size of a message.
   */
  messageSystemAttributes?: Record<string, MessageSystemAttributeValue>;
  /**
   * This parameter applies only to FIFO (first-in-first-out) queues. The token used for
   * deduplication of sent messages. If a message with a particular MessageDeduplicationId is sent
   * successfully, any messages sent with the same MessageDeduplicationId are accepted successfully
   * but aren't delivered during the 5-minute deduplication interval. For more information, see
   * Exactly-once processing in the Amazon SQS Developer Guide. Every message must have a unique
   * MessageDeduplicationId, You may provide a MessageDeduplicationId explicitly. If you aren't able
   * to provide a MessageDeduplicationId and you enab
   */
  messageDeduplicationId?: string;
  /**
   * MessageGroupId is an attribute used in Amazon SQS FIFO (First-In-First-Out) and standard
   * queues. In FIFO queues, MessageGroupId organizes messages into distinct groups. Messages within
   * the same message group are always processed one at a time, in strict order, ensuring that no
   * two messages from the same group are processed simultaneously. In standard queues, using
   * MessageGroupId enables fair queues. It is used to identify the tenant a message belongs to,
   * helping maintain consistent message dwell time across all tenants during noisy neighbor events.
   * Unlike FIFO queues, messages with the same Me
   */
  messageGroupId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sendMessageRequestSchema: Schema<SendMessageRequest> = s.object<SendMessageRequest>(
  {
    queueUrl: s.string(),
    messageBody: s.string(),
    delaySeconds: s.optional(s.int()),
    messageAttributes: s.optional(
      s.record(
        s.string(),
        s.lazy(() => messageAttributeValueSchema),
      ),
    ),
    messageSystemAttributes: s.optional(
      s.record(
        s.string(),
        s.lazy(() => messageSystemAttributeValueSchema),
      ),
    ),
    messageDeduplicationId: s.optional(s.string()),
    messageGroupId: s.optional(s.string()),
    _keysMap: {
      queueUrl: "QueueUrl",
      messageBody: "MessageBody",
      delaySeconds: "DelaySeconds",
      messageAttributes: "MessageAttributes",
      messageSystemAttributes: "MessageSystemAttributes",
      messageDeduplicationId: "MessageDeduplicationId",
      messageGroupId: "MessageGroupId",
    },
  },
  { additionalProperties: s.json() },
);
