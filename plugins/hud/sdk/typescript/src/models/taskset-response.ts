import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  lifecycleStageModelInternalSchema,
  lifecycleStageModelSchema,
  type LifecycleStageModel,
} from "./lifecycle-stage-model.js";
import {
  descriptionHudPlatformTasksetsApiInternalSchema,
  descriptionHudPlatformTasksetsApiSchema,
  type DescriptionHudPlatformTasksetsApi,
} from "./unions/description-hud-platform-tasksets-api.js";
import { hiddenProgressStagesSchema, type HiddenProgressStages } from "./unions/hidden-progress-stages.js";
import { ownerAvatarUrlSchema, type OwnerAvatarUrl } from "./unions/owner-avatar-url.js";
import { ownerNameSchema, type OwnerName } from "./unions/owner-name.js";
import { projectIdSchema, type ProjectId } from "./unions/project-id.js";
import { registryIdSchema, type RegistryId } from "./unions/registry-id.js";
import { teamNameSchema, type TeamName } from "./unions/team-name.js";

export type TasksetResponse = {
  id: string;
  name: string;
  description?: DescriptionHudPlatformTasksetsApi;
  registryId?: RegistryId;
  projectId: ProjectId;
  public: boolean;
  /** @default false */
  featured?: boolean;
  /** @default "EVAL" */
  purpose?: string;
  /** @default 0 */
  starCount?: number;
  /** @default 0 */
  taskCount?: number;
  /** @default 0 */
  sampleUnitCount?: number;
  hiddenProgressStages?: HiddenProgressStages;
  lifecycleStages?: LifecycleStageModel[];
  columns?: Record<string, unknown>;
  qaAutoChecks?: string[];
  createdAt: Date;
  updatedAt: Date;
  /** @default false */
  isStarred?: boolean;
  /** @default false */
  isOwner?: boolean;
  /** @default false */
  canViewScoped?: boolean;
  /** @default false */
  canEdit?: boolean;
  /** @default false */
  canManage?: boolean;
  ownerName?: OwnerName;
  ownerAvatarUrl?: OwnerAvatarUrl;
  teamName?: TeamName;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tasksetResponseProperties: s.Shape<TasksetResponse> = {
  id: s.string(),
  name: s.string(),
  description: s.optional(s.lazy(() => descriptionHudPlatformTasksetsApiInternalSchema)),
  registryId: s.optional(s.lazy(() => registryIdSchema)),
  projectId: projectIdSchema,
  public: s.boolean(),
  featured: s.defaulted(s.boolean(), false),
  purpose: s.defaulted(s.string(), "EVAL"),
  starCount: s.defaulted(s.int(), 0),
  taskCount: s.defaulted(s.int(), 0),
  sampleUnitCount: s.defaulted(s.int(), 0),
  hiddenProgressStages: s.optional(s.lazy(() => hiddenProgressStagesSchema)),
  lifecycleStages: s.optional(s.array(s.lazy(() => lifecycleStageModelInternalSchema))),
  columns: s.optional(s.record(s.string(), s.unknown())),
  qaAutoChecks: s.optional(s.array(s.string())),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  isStarred: s.defaulted(s.boolean(), false),
  isOwner: s.defaulted(s.boolean(), false),
  canViewScoped: s.defaulted(s.boolean(), false),
  canEdit: s.defaulted(s.boolean(), false),
  canManage: s.defaulted(s.boolean(), false),
  ownerName: s.optional(s.lazy(() => ownerNameSchema)),
  ownerAvatarUrl: s.optional(s.lazy(() => ownerAvatarUrlSchema)),
  teamName: s.optional(s.lazy(() => teamNameSchema)),
  _keysMap: {
    registryId: "registry_id",
    projectId: "project_id",
    starCount: "star_count",
    taskCount: "task_count",
    sampleUnitCount: "sample_unit_count",
    hiddenProgressStages: "hidden_progress_stages",
    lifecycleStages: "lifecycle_stages",
    qaAutoChecks: "qa_auto_checks",
    createdAt: "created_at",
    updatedAt: "updated_at",
    isStarred: "is_starred",
    isOwner: "is_owner",
    canViewScoped: "can_view_scoped",
    canEdit: "can_edit",
    canManage: "can_manage",
    ownerName: "owner_name",
    ownerAvatarUrl: "owner_avatar_url",
    teamName: "team_name",
  },
};

export const tasksetResponseInternalSchema: Schema<TasksetResponse> = s.object<TasksetResponse>(
  tasksetResponseProperties,
  { additionalProperties: s.json() },
);

export const tasksetResponseSchema: Schema<TasksetResponse> = s.lazySchema(() =>
  s.object<TasksetResponse>(
    {
      ...tasksetResponseProperties,
      description: s.optional(s.lazy(() => descriptionHudPlatformTasksetsApiSchema)),
      lifecycleStages: s.optional(s.array(s.lazy(() => lifecycleStageModelSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
