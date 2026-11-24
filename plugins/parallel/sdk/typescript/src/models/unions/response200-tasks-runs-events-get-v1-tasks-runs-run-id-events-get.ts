import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorEventSchema, type ErrorEvent } from "../error-event.js";
import { taskRunEventInternalSchema, taskRunEventSchema, type TaskRunEvent } from "../task-run-event.js";
import {
  taskRunProgressMessageEventSchema,
  type TaskRunProgressMessageEvent,
} from "../task-run-progress-message-event.js";
import {
  taskRunProgressStatsEventSchema,
  type TaskRunProgressStatsEvent,
} from "../task-run-progress-stats-event.js";

export type Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet =
  | (TaskRunProgressStatsEvent & { type: "task_run.progress_stats" })
  | (TaskRunProgressMessageEvent & { type: "task_run.progress_msg.plan" })
  | (TaskRunProgressMessageEvent & { type: "task_run.progress_msg.search" })
  | (TaskRunProgressMessageEvent & { type: "task_run.progress_msg.result" })
  | (TaskRunProgressMessageEvent & { type: "task_run.progress_msg.tool_call" })
  | (TaskRunProgressMessageEvent & { type: "task_run.progress_msg.exec_status" })
  | (TaskRunEvent & { type: "task_run.state" })
  | (ErrorEvent & { type: "error" });

export const response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetInternalSchema: Schema<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet> =
  s.discriminatedUnion<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>("type", {
    "task_run.progress_stats": taskRunProgressStatsEventSchema,
    "task_run.progress_msg.plan": taskRunProgressMessageEventSchema,
    "task_run.progress_msg.search": taskRunProgressMessageEventSchema,
    "task_run.progress_msg.result": taskRunProgressMessageEventSchema,
    "task_run.progress_msg.tool_call": taskRunProgressMessageEventSchema,
    "task_run.progress_msg.exec_status": taskRunProgressMessageEventSchema,
    "task_run.state": taskRunEventInternalSchema,
    error: errorEventSchema,
  });

export const response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetSchema: Schema<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet> =
  s.lazySchema(() =>
    s.discriminatedUnion<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>("type", {
      "task_run.progress_stats": taskRunProgressStatsEventSchema,
      "task_run.progress_msg.plan": taskRunProgressMessageEventSchema,
      "task_run.progress_msg.search": taskRunProgressMessageEventSchema,
      "task_run.progress_msg.result": taskRunProgressMessageEventSchema,
      "task_run.progress_msg.tool_call": taskRunProgressMessageEventSchema,
      "task_run.progress_msg.exec_status": taskRunProgressMessageEventSchema,
      "task_run.state": taskRunEventSchema,
      error: errorEventSchema,
    }),
  );
