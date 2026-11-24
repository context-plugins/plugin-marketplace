import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SetQueueAttributesRequest = {
  /**
   * The URL of the Amazon SQS queue whose attributes are set. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /**
   * A map of attributes to set. The following lists the names, descriptions, and values of the
   * special request parameters that the SetQueueAttributes action uses: DelaySeconds – The length
   * of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid
   * values: An integer from 0 to 900 (15 minutes). Default: 0. MaximumMessageSize – The limit of
   * how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer
   * from 1,024 bytes (1 KiB) up to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).
   * MessageRetentionPeriod – The length of time, in s
   */
  attributes: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setQueueAttributesRequestSchema: Schema<SetQueueAttributesRequest> =
  s.object<SetQueueAttributesRequest>(
    {
      queueUrl: s.string(),
      attributes: s.record(s.string(), s.string()),
      _keysMap: {
        queueUrl: "QueueUrl",
        attributes: "Attributes",
      },
    },
    { additionalProperties: s.json() },
  );
