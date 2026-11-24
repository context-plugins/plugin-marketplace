import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartMessageMoveTaskRequest = {
  /**
   * The ARN of the queue that contains the messages to be moved to another queue. Currently, only
   * ARNs of dead-letter queues (DLQs) whose sources are other Amazon SQS queues are accepted. DLQs
   * whose sources are non-SQS queues, such as Lambda or Amazon SNS topics, are not currently
   * supported.
   */
  sourceArn: string;
  /**
   * The ARN of the queue that receives the moved messages. You can use this field to specify the
   * destination queue where you would like to redrive messages. If this field is left blank, the
   * messages will be redriven back to their respective original source queues.
   */
  destinationArn?: string;
  /**
   * The number of messages to be moved per second (the message movement rate). You can use this
   * field to define a fixed message movement rate. The maximum value for messages per second is
   * 500. If this field is left blank, the system will optimize the rate based on the queue message
   * backlog size, which may vary throughout the duration of the message movement task.
   */
  maxNumberOfMessagesPerSecond?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMessageMoveTaskRequestSchema: Schema<StartMessageMoveTaskRequest> =
  s.object<StartMessageMoveTaskRequest>(
    {
      sourceArn: s.string(),
      destinationArn: s.optional(s.string()),
      maxNumberOfMessagesPerSecond: s.optional(s.int()),
      _keysMap: {
        sourceArn: "SourceArn",
        destinationArn: "DestinationArn",
        maxNumberOfMessagesPerSecond: "MaxNumberOfMessagesPerSecond",
      },
    },
    { additionalProperties: s.json() },
  );
