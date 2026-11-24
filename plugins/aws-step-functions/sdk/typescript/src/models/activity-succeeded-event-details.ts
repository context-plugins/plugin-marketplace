import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  historyEventExecutionDataDetailsSchema,
  type HistoryEventExecutionDataDetails,
} from "./history-event-execution-data-details.js";

export type ActivitySucceededEventDetails = {
  /**
   * The JSON data output by the activity task. Length constraints apply to the payload size, and
   * are expressed as bytes in UTF-8 encoding.
   */
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activitySucceededEventDetailsSchema: Schema<ActivitySucceededEventDetails> =
  s.object<ActivitySucceededEventDetails>(
    {
      output: s.optional(s.string()),
      outputDetails: s.optional(s.lazy(() => historyEventExecutionDataDetailsSchema)),
    },
    { additionalProperties: s.json() },
  );
