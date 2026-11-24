import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskGroupStatus3Schema, type TaskGroupStatus3 } from "./task-group-status3.js";
import { createdAt1Schema, type CreatedAt1 } from "./unions/created-at1.js";
import { metadata6Schema, type Metadata6 } from "./unions/metadata6.js";

/** Response object for a task group, including its status and metadata. */
export type TaskGroupResponse = {
  /** ID of the group. */
  taskgroupId: string;
  /** User-provided metadata stored with the group. */
  metadata?: Metadata6;
  /** Status of the group. */
  status: TaskGroupStatus3;
  /** Timestamp of the creation of the group, as an RFC 3339 string. */
  createdAt: CreatedAt1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskGroupResponseSchema: Schema<TaskGroupResponse> = s.object<TaskGroupResponse>(
  {
    taskgroupId: s.string(),
    metadata: s.optional(s.lazy(() => metadata6Schema)),
    status: taskGroupStatus3Schema,
    createdAt: createdAt1Schema,
    _keysMap: {
      taskgroupId: "taskgroup_id",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
