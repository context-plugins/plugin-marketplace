import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tasksupport1Schema, type Tasksupport1 } from "./unions/tasksupport1.js";

/** Execution-related properties for a tool. */
export type ToolExecution = {
  taskSupport?: Tasksupport1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const toolExecutionSchema: Schema<ToolExecution> = s.object<ToolExecution>(
  {
    taskSupport: s.optional(s.lazy(() => tasksupport1Schema)),
  },
  { additionalProperties: s.json() },
);
