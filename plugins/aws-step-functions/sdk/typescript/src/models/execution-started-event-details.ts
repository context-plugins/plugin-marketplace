import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  historyEventExecutionDataDetailsSchema,
  type HistoryEventExecutionDataDetails,
} from "./history-event-execution-data-details.js";

export type ExecutionStartedEventDetails = {
  /**
   * The JSON data input to the execution. Length constraints apply to the payload size, and are
   * expressed as bytes in UTF-8 encoding.
   */
  input?: string;
  inputDetails?: HistoryEventExecutionDataDetails;
  /** The Amazon Resource Name (ARN) of the IAM role used for executing Lambda tasks. */
  roleArn?: string;
  /**
   * The Amazon Resource Name (ARN) that identifies a state machine alias used for starting the
   * state machine execution.
   */
  stateMachineAliasArn?: string;
  /**
   * The Amazon Resource Name (ARN) that identifies a state machine version used for starting the
   * state machine execution.
   */
  stateMachineVersionArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionStartedEventDetailsSchema: Schema<ExecutionStartedEventDetails> =
  s.object<ExecutionStartedEventDetails>(
    {
      input: s.optional(s.string()),
      inputDetails: s.optional(s.lazy(() => historyEventExecutionDataDetailsSchema)),
      roleArn: s.optional(s.string()),
      stateMachineAliasArn: s.optional(s.string()),
      stateMachineVersionArn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
