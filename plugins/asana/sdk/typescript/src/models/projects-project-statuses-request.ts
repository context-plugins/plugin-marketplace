import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectStatusRequestSchema, type ProjectStatusRequest } from "./project-status-request.js";

export type ProjectsProjectStatusesRequest = {
  data?: ProjectStatusRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsProjectStatusesRequestSchema: Schema<ProjectsProjectStatusesRequest> =
  s.object<ProjectsProjectStatusesRequest>(
    {
      data: s.optional(s.lazy(() => projectStatusRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
