import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executorResourceRequestSchema, type ExecutorResourceRequest } from "./executor-resource-request.js";
import { taskResourceRequestSchema, type TaskResourceRequest } from "./task-resource-request.js";

/**
 * Resource profile that contains information about all the resources required by executors and
 * tasks.
 */
export type ResourceProfileInfo = {
  taskResources?: Record<string, TaskResourceRequest>;
  resourceProfileId?: number;
  executorResources?: Record<string, ExecutorResourceRequest>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceProfileInfoSchema: Schema<ResourceProfileInfo> = s.object<ResourceProfileInfo>(
  {
    taskResources: s.optional(
      s.record(
        s.string(),
        s.lazy(() => taskResourceRequestSchema),
      ),
    ),
    resourceProfileId: s.optional(s.int()),
    executorResources: s.optional(
      s.record(
        s.string(),
        s.lazy(() => executorResourceRequestSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
