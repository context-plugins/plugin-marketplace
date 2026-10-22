import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { eventTaskSchema, type EventTask } from "../event-task.js";
import { expressionTaskSchema, type ExpressionTask } from "../expression-task.js";
import { loadToolFromFileTaskSchema, type LoadToolFromFileTask } from "../load-tool-from-file-task.js";
import { stepsTaskSchema, type StepsTask } from "../steps-task.js";

export type Task1 =
  | (EventTask & { type: "event" })
  | (ExpressionTask & { type: "expression" })
  | (LoadToolFromFileTask & { type: "import" })
  | (StepsTask & { type: "steps" });

export const task1Schema: Schema<Task1> = s.discriminatedUnion<Task1>("type", {
  event: eventTaskSchema,
  expression: expressionTaskSchema,
  import: loadToolFromFileTaskSchema,
  steps: stepsTaskSchema,
});
