import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskList = {
  /** The name of the task list. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskListSchema: Schema<TaskList> = s.object<TaskList>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
