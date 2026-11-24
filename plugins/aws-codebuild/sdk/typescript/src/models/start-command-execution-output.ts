import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commandExecutionSchema, type CommandExecution } from "./command-execution.js";

export type StartCommandExecutionOutput = {
  commandExecution?: CommandExecution;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startCommandExecutionOutputSchema: Schema<StartCommandExecutionOutput> =
  s.object<StartCommandExecutionOutput>(
    {
      commandExecution: s.optional(s.lazy(() => commandExecutionSchema)),
    },
    { additionalProperties: s.json() },
  );
