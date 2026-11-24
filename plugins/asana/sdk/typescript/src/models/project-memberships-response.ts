import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  projectMembershipResponseSchema,
  type ProjectMembershipResponse,
} from "./project-membership-response.js";

export type ProjectMembershipsResponse = {
  data?: ProjectMembershipResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectMembershipsResponseSchema: Schema<ProjectMembershipsResponse> =
  s.object<ProjectMembershipsResponse>(
    {
      data: s.optional(s.lazy(() => projectMembershipResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
