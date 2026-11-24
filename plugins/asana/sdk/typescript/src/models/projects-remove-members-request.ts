import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { removeMembersRequestSchema, type RemoveMembersRequest } from "./remove-members-request.js";

export type ProjectsRemoveMembersRequest = {
  data?: RemoveMembersRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsRemoveMembersRequestSchema: Schema<ProjectsRemoveMembersRequest> =
  s.object<ProjectsRemoveMembersRequest>(
    {
      data: s.optional(s.lazy(() => removeMembersRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
