import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  taskCompactAsanaProjectsApiSchema,
  type TaskCompactAsanaProjectsApi,
} from "./task-compact-asana-projects-api.js";

export type TasksDependenciesResponse = {
  data?: TaskCompactAsanaProjectsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksDependenciesResponseSchema: Schema<TasksDependenciesResponse> =
  s.object<TasksDependenciesResponse>(
    {
      data: s.optional(s.array(s.lazy(() => taskCompactAsanaProjectsApiSchema))),
    },
    { additionalProperties: s.json() },
  );
