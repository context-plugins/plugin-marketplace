import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompactSchema, type ProjectCompact } from "./project-compact.js";
import { projectTemplateCompactSchema, type ProjectTemplateCompact } from "./project-template-compact.js";
import { statusSchema, type Status } from "./status.js";
import { taskCompactSchema, type TaskCompact } from "./task-compact.js";

export type JobBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning.
   */
  resourceSubtype?: string;
  /**
   * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`,
   * or `failed`.
   */
  status?: Status;
  newProject?: ProjectCompact;
  newTask?: TaskCompact;
  newProjectTemplate?: ProjectTemplateCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobBaseSchema: Schema<JobBase> = s.object<JobBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    resourceSubtype: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    newProject: s.optional(s.lazy(() => projectCompactSchema)),
    newTask: s.optional(s.lazy(() => taskCompactSchema)),
    newProjectTemplate: s.optional(s.lazy(() => projectTemplateCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
      newProject: "new_project",
      newTask: "new_task",
      newProjectTemplate: "new_project_template",
    },
  },
  { additionalProperties: s.json() },
);
