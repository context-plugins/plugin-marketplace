import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectBriefResponseSchema, type ProjectBriefResponse } from "./project-brief-response.js";

export type ProjectsProjectBriefsResponse = {
  data?: ProjectBriefResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsProjectBriefsResponseSchema: Schema<ProjectsProjectBriefsResponse> =
  s.object<ProjectsProjectBriefsResponse>(
    {
      data: s.optional(s.lazy(() => projectBriefResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
