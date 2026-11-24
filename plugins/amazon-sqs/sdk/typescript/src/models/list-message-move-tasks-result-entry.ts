import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListMessageMoveTasksResultEntry = {
  /**
   * An identifier associated with a message movement task. When this field is returned in the
   * response of the ListMessageMoveTasks action, it is only populated for tasks that are in RUNNING
   * status.
   */
  taskHandle?: string;
  /**
   * The status of the message movement task. Possible values are: RUNNING, COMPLETED, CANCELLING,
   * CANCELLED, and FAILED.
   */
  status?: string;
  /** The ARN of the queue that contains the messages to be moved to another queue. */
  sourceArn?: string;
  /**
   * The ARN of the destination queue if it has been specified in the StartMessageMoveTask request.
   * If a DestinationArn has not been specified in the StartMessageMoveTask request, this field
   * value will be NULL.
   */
  destinationArn?: string;
  /**
   * The number of messages to be moved per second (the message movement rate), if it has been
   * specified in the StartMessageMoveTask request. If a MaxNumberOfMessagesPerSecond has not been
   * specified in the StartMessageMoveTask request, this field value will be NULL.
   */
  maxNumberOfMessagesPerSecond?: number;
  /** The approximate number of messages already moved to the destination queue. */
  approximateNumberOfMessagesMoved?: number;
  /**
   * The number of messages to be moved from the source queue. This number is obtained at the time
   * of starting the message movement task and is only included after the message movement task is
   * selected to start.
   */
  approximateNumberOfMessagesToMove?: number;
  /** The task failure reason (only included if the task status is FAILED). */
  failureReason?: string;
  /** The timestamp of starting the message movement task. */
  startedTimestamp?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMessageMoveTasksResultEntrySchema: Schema<ListMessageMoveTasksResultEntry> =
  s.object<ListMessageMoveTasksResultEntry>(
    {
      taskHandle: s.optional(s.string()),
      status: s.optional(s.string()),
      sourceArn: s.optional(s.string()),
      destinationArn: s.optional(s.string()),
      maxNumberOfMessagesPerSecond: s.optional(s.int()),
      approximateNumberOfMessagesMoved: s.optional(s.int()),
      approximateNumberOfMessagesToMove: s.optional(s.int()),
      failureReason: s.optional(s.string()),
      startedTimestamp: s.optional(s.int()),
      _keysMap: {
        taskHandle: "TaskHandle",
        status: "Status",
        sourceArn: "SourceArn",
        destinationArn: "DestinationArn",
        maxNumberOfMessagesPerSecond: "MaxNumberOfMessagesPerSecond",
        approximateNumberOfMessagesMoved: "ApproximateNumberOfMessagesMoved",
        approximateNumberOfMessagesToMove: "ApproximateNumberOfMessagesToMove",
        failureReason: "FailureReason",
        startedTimestamp: "StartedTimestamp",
      },
    },
    { additionalProperties: s.json() },
  );
