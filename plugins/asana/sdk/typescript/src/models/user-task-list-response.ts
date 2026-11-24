import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type UserTaskListResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the user task list. */
  name?: string;
  /**
   * The owner of the user task list, i.e. the person whose My Tasks is represented by this
   * resource.
   */
  owner?: UserCompact;
  /** The workspace in which the user task list is located. */
  workspace?: WorkspaceCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTaskListResponseSchema: Schema<UserTaskListResponse> = s.object<UserTaskListResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    owner: s.optional(s.lazy(() => userCompactSchema)),
    workspace: s.optional(s.lazy(() => workspaceCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
