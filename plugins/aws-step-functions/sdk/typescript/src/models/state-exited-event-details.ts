import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  assignedVariablesDetailsSchema,
  type AssignedVariablesDetails,
} from "./assigned-variables-details.js";
import {
  historyEventExecutionDataDetailsSchema,
  type HistoryEventExecutionDataDetails,
} from "./history-event-execution-data-details.js";

export type StateExitedEventDetails = {
  /**
   * The name of the state. A name must not contain: white space brackets { } [ ] wildcard
   * characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F,
   * U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable
   * logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   */
  name: string;
  /**
   * The JSON output data of the state. Length constraints apply to the payload size, and are
   * expressed as bytes in UTF-8 encoding.
   */
  output?: string;
  outputDetails?: HistoryEventExecutionDataDetails;
  /** Map of variable name and value as a serialized JSON representation. */
  assignedVariables?: Record<string, string>;
  assignedVariablesDetails?: AssignedVariablesDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateExitedEventDetailsSchema: Schema<StateExitedEventDetails> =
  s.object<StateExitedEventDetails>(
    {
      name: s.string(),
      output: s.optional(s.string()),
      outputDetails: s.optional(s.lazy(() => historyEventExecutionDataDetailsSchema)),
      assignedVariables: s.optional(s.record(s.string(), s.string())),
      assignedVariablesDetails: s.optional(s.lazy(() => assignedVariablesDetailsSchema)),
    },
    { additionalProperties: s.json() },
  );
