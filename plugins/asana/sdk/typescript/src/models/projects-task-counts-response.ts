import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskCountResponseSchema, type TaskCountResponse } from "./task-count-response.js";

export type ProjectsTaskCountsResponse = {
  /** A response object returned from the task count endpoint. */
  data?: TaskCountResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsTaskCountsResponseSchema: Schema<ProjectsTaskCountsResponse> =
  s.object<ProjectsTaskCountsResponse>(
    {
      data: s.optional(s.lazy(() => taskCountResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
