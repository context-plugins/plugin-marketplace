import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  historyEventExecutionDataDetailsSchema,
  type HistoryEventExecutionDataDetails,
} from "./history-event-execution-data-details.js";

export type StateEnteredEventDetails = {
  /** The name of the state. */
  name: string;
  /**
   * The string that contains the JSON input data for the state. Length constraints apply to the
   * payload size, and are expressed as bytes in UTF-8 encoding.
   */
  input?: string;
  inputDetails?: HistoryEventExecutionDataDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateEnteredEventDetailsSchema: Schema<StateEnteredEventDetails> =
  s.object<StateEnteredEventDetails>(
    {
      name: s.string(),
      input: s.optional(s.string()),
      inputDetails: s.optional(s.lazy(() => historyEventExecutionDataDetailsSchema)),
    },
    { additionalProperties: s.json() },
  );
