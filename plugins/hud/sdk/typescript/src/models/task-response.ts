import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskActivityEventSchema, type TaskActivityEvent } from "./task-activity-event.js";
import { assigneeUserIdSchema, type AssigneeUserId } from "./unions/assignee-user-id.js";
import { columnValuesSchema, type ColumnValues } from "./unions/column-values.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { externalIdInternalSchema, externalIdSchema, type ExternalId } from "./unions/external-id.js";
import { latestVersionIdSchema, type LatestVersionId } from "./unions/latest-version-id.js";

export type TaskResponse = {
  id: string;
  tasksetId: string;
  name: string;
  description?: Description;
  latestVersionId?: LatestVersionId;
  externalId?: ExternalId;
  columnValues?: Record<string, ColumnValues>;
  /** @default false */
  binarized?: boolean;
  tags?: string[];
  assigneeUserId?: AssigneeUserId;
  activityLog?: TaskActivityEvent[];
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskResponseProperties: s.Shape<TaskResponse> = {
  id: s.string(),
  tasksetId: s.string(),
  name: s.string(),
  description: s.optional(s.lazy(() => descriptionSchema)),
  latestVersionId: s.optional(s.lazy(() => latestVersionIdSchema)),
  externalId: s.optional(s.lazy(() => externalIdInternalSchema)),
  columnValues: s.optional(
    s.record(
      s.string(),
      s.lazy(() => columnValuesSchema),
    ),
  ),
  binarized: s.defaulted(s.boolean(), false),
  tags: s.optional(s.array(s.string())),
  assigneeUserId: s.optional(s.lazy(() => assigneeUserIdSchema)),
  activityLog: s.optional(s.array(s.lazy(() => taskActivityEventSchema))),
  createdAt: s.dateTime(),
  _keysMap: {
    tasksetId: "taskset_id",
    latestVersionId: "latest_version_id",
    externalId: "external_id",
    columnValues: "column_values",
    assigneeUserId: "assignee_user_id",
    activityLog: "activity_log",
    createdAt: "created_at",
  },
};

export const taskResponseInternalSchema: Schema<TaskResponse> = s.object<TaskResponse>(
  taskResponseProperties,
  { additionalProperties: s.json() },
);

export const taskResponseSchema: Schema<TaskResponse> = s.lazySchema(() =>
  s.object<TaskResponse>(
    {
      ...taskResponseProperties,
      externalId: s.optional(s.lazy(() => externalIdSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
