import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Event type; always starts with 'task_run.progress_msg'. */
export const Type5 = {
  TaskRunProgressMsgPlan: "task_run.progress_msg.plan",
  TaskRunProgressMsgSearch: "task_run.progress_msg.search",
  TaskRunProgressMsgResult: "task_run.progress_msg.result",
  TaskRunProgressMsgToolCall: "task_run.progress_msg.tool_call",
  TaskRunProgressMsgExecStatus: "task_run.progress_msg.exec_status",
} as const;
export type Type5 = (typeof Type5)[keyof typeof Type5] | (string & {});

export const type5Schema: EnumSchema<Type5> = s.enumOf<Type5>(Type5);
