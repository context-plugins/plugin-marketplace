import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetQueueUrlRequest = {
  /**
   * (Required) The name of the queue for which you want to fetch the URL. The name can be up to 80
   * characters long and can include alphanumeric characters, hyphens (-), and underscores (_).
   * Queue URLs and names are case-sensitive.
   */
  queueName: string;
  /**
   * (Optional) The Amazon Web Services account ID of the account that created the queue. This is
   * only required when you are attempting to access a queue owned by another Amazon Web Services
   * account.
   */
  queueOwnerAwsAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getQueueUrlRequestSchema: Schema<GetQueueUrlRequest> = s.object<GetQueueUrlRequest>(
  {
    queueName: s.string(),
    queueOwnerAwsAccountId: s.optional(s.string()),
    _keysMap: {
      queueName: "QueueName",
      queueOwnerAwsAccountId: "QueueOwnerAWSAccountId",
    },
  },
  { additionalProperties: s.json() },
);
