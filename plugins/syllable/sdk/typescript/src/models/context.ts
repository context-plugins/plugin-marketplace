import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskSchema, type Task } from "./unions/task.js";

export type Context = {
  /** Task implementation details */
  task?: Task;
};

export const contextSchema: Schema<Context> = s.object<Context>({
  task: s.optional(s.lazy(() => taskSchema)),
});
