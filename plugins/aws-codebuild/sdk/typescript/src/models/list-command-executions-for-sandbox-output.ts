import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commandExecutionSchema, type CommandExecution } from "./command-execution.js";

export type ListCommandExecutionsForSandboxOutput = {
  /** Information about the requested command executions. */
  commandExecutions?: CommandExecution[];
  /** Information about the next token to get paginated results. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCommandExecutionsForSandboxOutputSchema: Schema<ListCommandExecutionsForSandboxOutput> =
  s.object<ListCommandExecutionsForSandboxOutput>(
    {
      commandExecutions: s.optional(s.array(s.lazy(() => commandExecutionSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
