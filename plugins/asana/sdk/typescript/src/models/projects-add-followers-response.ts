import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectResponseSchema, type ProjectResponse } from "./project-response.js";

export type ProjectsAddFollowersResponse = {
  data?: ProjectResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsAddFollowersResponseSchema: Schema<ProjectsAddFollowersResponse> =
  s.object<ProjectsAddFollowersResponse>(
    {
      data: s.optional(s.lazy(() => projectResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
