import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  projectMembershipCompactSchema,
  type ProjectMembershipCompact,
} from "./project-membership-compact.js";

export type ProjectsProjectMembershipsResponse = {
  data?: ProjectMembershipCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsProjectMembershipsResponseSchema: Schema<ProjectsProjectMembershipsResponse> =
  s.object<ProjectsProjectMembershipsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => projectMembershipCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
