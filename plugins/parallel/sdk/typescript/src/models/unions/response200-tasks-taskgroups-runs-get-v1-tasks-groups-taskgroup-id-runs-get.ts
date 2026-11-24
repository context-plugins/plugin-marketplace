import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorEventSchema, type ErrorEvent } from "../error-event.js";
import { taskRunEventInternalSchema, taskRunEventSchema, type TaskRunEvent } from "../task-run-event.js";

export type Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet =
  | (TaskRunEvent & { type: "task_run.state" })
  | (ErrorEvent & { type: "error" });

export const response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetInternalSchema: Schema<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet> =
  s.discriminatedUnion<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>("type", {
    "task_run.state": taskRunEventInternalSchema,
    error: errorEventSchema,
  });

export const response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetSchema: Schema<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet> =
  s.lazySchema(() =>
    s.discriminatedUnion<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>("type", {
      "task_run.state": taskRunEventSchema,
      error: errorEventSchema,
    }),
  );
