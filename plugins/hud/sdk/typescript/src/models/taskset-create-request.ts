import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  descriptionHudPlatformTasksetsApiInternalSchema,
  descriptionHudPlatformTasksetsApiSchema,
  type DescriptionHudPlatformTasksetsApi,
} from "./unions/description-hud-platform-tasksets-api.js";
import { projectIdSchema, type ProjectId } from "./unions/project-id.js";
import { registryIdSchema, type RegistryId } from "./unions/registry-id.js";

export type TasksetCreateRequest = {
  name: string;
  description?: DescriptionHudPlatformTasksetsApi;
  registryId?: RegistryId;
  projectId?: ProjectId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tasksetCreateRequestProperties: s.Shape<TasksetCreateRequest> = {
  name: s.string(),
  description: s.optional(s.lazy(() => descriptionHudPlatformTasksetsApiInternalSchema)),
  registryId: s.optional(s.lazy(() => registryIdSchema)),
  projectId: s.optional(s.lazy(() => projectIdSchema)),
  _keysMap: {
    registryId: "registry_id",
    projectId: "project_id",
  },
};

export const tasksetCreateRequestInternalSchema: Schema<TasksetCreateRequest> =
  s.object<TasksetCreateRequest>(tasksetCreateRequestProperties, { additionalProperties: s.json() });

export const tasksetCreateRequestSchema: Schema<TasksetCreateRequest> = s.lazySchema(() =>
  s.object<TasksetCreateRequest>(
    {
      ...tasksetCreateRequestProperties,
      name: s.string().check(s.maxLength(255)),
      description: s.optional(s.lazy(() => descriptionHudPlatformTasksetsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
