import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  historyEventExecutionDataDetailsSchema,
  type HistoryEventExecutionDataDetails,
} from "./history-event-execution-data-details.js";

export type TaskSubmittedEventDetails = {
  /** The service name of the resource in a task state. */
  resourceType: string;
  /** The action of the resource called by a task state. */
  resource: string;
  /**
   * The response from a resource when a task has started. Length constraints apply to the payload
   * size, and are expressed as bytes in UTF-8 encoding.
   */
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskSubmittedEventDetailsSchema: Schema<TaskSubmittedEventDetails> =
  s.object<TaskSubmittedEventDetails>(
    {
      resourceType: s.string(),
      resource: s.string(),
      output: s.optional(s.string()),
      outputDetails: s.optional(s.lazy(() => historyEventExecutionDataDetailsSchema)),
    },
    { additionalProperties: s.json() },
  );
