import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectStatusCompactSchema, type ProjectStatusCompact } from "./project-status-compact.js";

export type ProjectsProjectStatusesResponse = {
  data?: ProjectStatusCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsProjectStatusesResponseSchema: Schema<ProjectsProjectStatusesResponse> =
  s.object<ProjectsProjectStatusesResponse>(
    {
      data: s.optional(s.array(s.lazy(() => projectStatusCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
