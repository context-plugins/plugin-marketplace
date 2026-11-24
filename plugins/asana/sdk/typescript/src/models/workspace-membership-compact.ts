import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type WorkspaceMembershipCompact = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  user?: UserCompact;
  workspace?: WorkspaceCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceMembershipCompactSchema: Schema<WorkspaceMembershipCompact> =
  s.object<WorkspaceMembershipCompact>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      user: s.optional(s.lazy(() => userCompactSchema)),
      workspace: s.optional(s.lazy(() => workspaceCompactSchema)),
      _keysMap: {
        resourceType: "resource_type",
      },
    },
    { additionalProperties: s.json() },
  );
