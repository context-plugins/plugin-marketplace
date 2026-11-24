import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobMetadataSchema, type JobMetadata } from "./job-metadata.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { importedFromSchema, type ImportedFrom } from "./unions/imported-from.js";
import { maxConcurrentSchema, type MaxConcurrent } from "./unions/max-concurrent.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";
import { projectIdSchema, type ProjectId } from "./unions/project-id.js";
import { tasksetIdSchema, type TasksetId } from "./unions/taskset-id.js";
import { tasksetNameSchema, type TasksetName } from "./unions/taskset-name.js";
import { userAvatarUrlSchema, type UserAvatarUrl } from "./unions/user-avatar-url.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";

export type JobResponse = {
  id: string;
  name?: NameHudPlatformJobsApi;
  description?: Description;
  tasksetId?: TasksetId;
  tasksetName?: TasksetName;
  projectId: ProjectId;
  status: string;
  maxSteps: number;
  groupSize: number;
  maxConcurrent?: MaxConcurrent;
  metadata?: JobMetadata;
  isRemote: boolean;
  importedFrom?: ImportedFrom;
  /** @default false */
  public?: boolean;
  /** @default false */
  isOwner?: boolean;
  /** @default false */
  canEdit?: boolean;
  userName?: UserName;
  userAvatarUrl?: UserAvatarUrl;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobResponseSchema: Schema<JobResponse> = s.object<JobResponse>(
  {
    id: s.string(),
    name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
    description: s.optional(s.lazy(() => descriptionSchema)),
    tasksetId: s.optional(s.lazy(() => tasksetIdSchema)),
    tasksetName: s.optional(s.lazy(() => tasksetNameSchema)),
    projectId: projectIdSchema,
    status: s.string(),
    maxSteps: s.int(),
    groupSize: s.int(),
    maxConcurrent: s.optional(s.lazy(() => maxConcurrentSchema)),
    metadata: s.optional(s.lazy(() => jobMetadataSchema)),
    isRemote: s.boolean(),
    importedFrom: s.optional(s.lazy(() => importedFromSchema)),
    public: s.defaulted(s.boolean(), false),
    isOwner: s.defaulted(s.boolean(), false),
    canEdit: s.defaulted(s.boolean(), false),
    userName: s.optional(s.lazy(() => userNameSchema)),
    userAvatarUrl: s.optional(s.lazy(() => userAvatarUrlSchema)),
    createdAt: s.dateTime(),
    _keysMap: {
      tasksetId: "taskset_id",
      tasksetName: "taskset_name",
      projectId: "project_id",
      maxSteps: "max_steps",
      groupSize: "group_size",
      maxConcurrent: "max_concurrent",
      isRemote: "is_remote",
      importedFrom: "imported_from",
      isOwner: "is_owner",
      canEdit: "can_edit",
      userName: "user_name",
      userAvatarUrl: "user_avatar_url",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
