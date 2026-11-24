import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workspaceMembershipCompactSchema,
  type WorkspaceMembershipCompact,
} from "./workspace-membership-compact.js";

export type WorkspacesWorkspaceMembershipsResponse = {
  data?: WorkspaceMembershipCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesWorkspaceMembershipsResponseSchema: Schema<WorkspacesWorkspaceMembershipsResponse> =
  s.object<WorkspacesWorkspaceMembershipsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => workspaceMembershipCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
