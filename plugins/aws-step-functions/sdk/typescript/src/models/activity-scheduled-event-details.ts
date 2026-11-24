import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  historyEventExecutionDataDetailsSchema,
  type HistoryEventExecutionDataDetails,
} from "./history-event-execution-data-details.js";

export type ActivityScheduledEventDetails = {
  /** The Amazon Resource Name (ARN) of the scheduled activity. */
  resource: string;
  /**
   * The JSON data input to the activity task. Length constraints apply to the payload size, and are
   * expressed as bytes in UTF-8 encoding.
   */
  input?: string;
  inputDetails?: HistoryEventExecutionDataDetails;
  /** The maximum allowed duration of the activity task. */
  timeoutInSeconds?: number;
  /** The maximum allowed duration between two heartbeats for the activity task. */
  heartbeatInSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityScheduledEventDetailsSchema: Schema<ActivityScheduledEventDetails> =
  s.object<ActivityScheduledEventDetails>(
    {
      resource: s.string(),
      input: s.optional(s.string()),
      inputDetails: s.optional(s.lazy(() => historyEventExecutionDataDetailsSchema)),
      timeoutInSeconds: s.optional(s.int()),
      heartbeatInSeconds: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
