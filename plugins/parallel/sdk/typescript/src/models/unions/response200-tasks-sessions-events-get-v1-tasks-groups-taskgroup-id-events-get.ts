import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorEventSchema, type ErrorEvent } from "../error-event.js";
import { taskGroupStatusEventSchema, type TaskGroupStatusEvent } from "../task-group-status-event.js";
import { taskRunEventInternalSchema, taskRunEventSchema, type TaskRunEvent } from "../task-run-event.js";

export type Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet =
  | (TaskGroupStatusEvent & { type: "task_group_status" })
  | (TaskRunEvent & { type: "task_run.state" })
  | (ErrorEvent & { type: "error" });

export const response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetInternalSchema: Schema<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet> =
  s.discriminatedUnion<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>("type", {
    task_group_status: taskGroupStatusEventSchema,
    "task_run.state": taskRunEventInternalSchema,
    error: errorEventSchema,
  });

export const response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetSchema: Schema<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet> =
  s.lazySchema(() =>
    s.discriminatedUnion<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>("type", {
      task_group_status: taskGroupStatusEventSchema,
      "task_run.state": taskRunEventSchema,
      error: errorEventSchema,
    }),
  );
