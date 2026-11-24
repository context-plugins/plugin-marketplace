import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commandExecutionSchema, type CommandExecution } from "./command-execution.js";

export type BatchGetCommandExecutionsOutput = {
  /** Information about the requested command executions. */
  commandExecutions?: CommandExecution[];
  /** The IDs of command executions for which information could not be found. */
  commandExecutionsNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetCommandExecutionsOutputSchema: Schema<BatchGetCommandExecutionsOutput> =
  s.object<BatchGetCommandExecutionsOutput>(
    {
      commandExecutions: s.optional(s.array(s.lazy(() => commandExecutionSchema))),
      commandExecutionsNotFound: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
