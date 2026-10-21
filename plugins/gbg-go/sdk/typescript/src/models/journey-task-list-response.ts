import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { taskSchema, type Task } from "./task.js";

export type JourneyTaskListResponse = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
  status: Status;
  tasks: Task[];
};

export const journeyTaskListResponseSchema: Schema<JourneyTaskListResponse> =
  s.object<JourneyTaskListResponse>({
    instanceId: s.string(),
    status: statusSchema,
    tasks: s.array(s.lazy(() => taskSchema)),
  });
