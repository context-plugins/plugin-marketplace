import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  taskCompactAsanaProjectsApiSchema,
  type TaskCompactAsanaProjectsApi,
} from "./task-compact-asana-projects-api.js";

export type ProjectsTasksResponse = {
  data?: TaskCompactAsanaProjectsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsTasksResponseSchema: Schema<ProjectsTasksResponse> = s.object<ProjectsTasksResponse>(
  {
    data: s.optional(s.array(s.lazy(() => taskCompactAsanaProjectsApiSchema))),
  },
  { additionalProperties: s.json() },
);
