import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type PollForActivityTaskInput = {
  /** The name of the domain that contains the task lists being polled. */
  domain: string;
  taskList: TaskList;
  /**
   * Identity of the worker making the request, recorded in the ActivityTaskStarted event in the
   * workflow history. This enables diagnostic tracing when problems arise. The form of this
   * identity is user defined.
   */
  identity?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollForActivityTaskInputSchema: Schema<PollForActivityTaskInput> =
  s.object<PollForActivityTaskInput>(
    {
      domain: s.string(),
      taskList: taskListSchema,
      identity: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
