import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priority1Schema, type Priority1 } from "./priority1.js";
import { reviewStatusSchema, type ReviewStatus } from "./review-status.js";
import {
  statusUiPathOrchestratorQueueItemsApiSchema,
  type StatusUiPathOrchestratorQueueItemsApi,
} from "./status-ui-path-orchestrator-queue-items-api.js";

/** A single transaction item in a queue */
export type QueueItem = {
  /** Unique integer identifier of the queue item */
  id?: number;
  /** Unique GUID key for the queue item */
  key?: string;
  /** ID of the queue this item belongs to */
  queueDefinitionId?: number;
  /** Current processing status of the queue item */
  status?: StatusUiPathOrchestratorQueueItemsApi;
  /** Manual review status for failed items */
  reviewStatus?: ReviewStatus;
  /** Processing priority of the queue item */
  priority?: Priority1;
  /** Optional unique reference string for idempotency */
  reference?: string;
  /** Custom key-value payload data for the queue item */
  specificContent?: Record<string, unknown>;
  /** Output data written by the robot after processing */
  output?: Record<string, unknown>;
  /** ISO 8601 timestamp when the item was added to the queue */
  creationTime?: Date;
  /** ISO 8601 timestamp when processing began */
  startProcessing?: Date;
  /** ISO 8601 timestamp when processing ended */
  endProcessing?: Date;
  /** Number of times this item has been retried */
  retryNumber?: number;
  /** Optional deadline for processing the item */
  dueDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queueItemSchema: Schema<QueueItem> = s.object<QueueItem>(
  {
    id: s.optional(s.int()),
    key: s.optional(s.string()),
    queueDefinitionId: s.optional(s.int()),
    status: s.optional(s.lazy(() => statusUiPathOrchestratorQueueItemsApiSchema)),
    reviewStatus: s.optional(s.lazy(() => reviewStatusSchema)),
    priority: s.optional(s.lazy(() => priority1Schema)),
    reference: s.optional(s.string()),
    specificContent: s.optional(s.record(s.string(), s.unknown())),
    output: s.optional(s.record(s.string(), s.unknown())),
    creationTime: s.optional(s.dateTime()),
    startProcessing: s.optional(s.dateTime()),
    endProcessing: s.optional(s.dateTime()),
    retryNumber: s.optional(s.int()),
    dueDate: s.optional(s.dateTime()),
    _keysMap: {
      id: "Id",
      key: "Key",
      queueDefinitionId: "QueueDefinitionId",
      status: "Status",
      reviewStatus: "ReviewStatus",
      priority: "Priority",
      reference: "Reference",
      specificContent: "SpecificContent",
      output: "Output",
      creationTime: "CreationTime",
      startProcessing: "StartProcessing",
      endProcessing: "EndProcessing",
      retryNumber: "RetryNumber",
      dueDate: "DueDate",
    },
  },
  { additionalProperties: s.json() },
);
