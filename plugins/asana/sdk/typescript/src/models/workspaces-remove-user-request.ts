import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workspaceRemoveUserRequestSchema,
  type WorkspaceRemoveUserRequest,
} from "./workspace-remove-user-request.js";

export type WorkspacesRemoveUserRequest = {
  /** A user identification object for specification with the addUser/removeUser endpoints. */
  data?: WorkspaceRemoveUserRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesRemoveUserRequestSchema: Schema<WorkspacesRemoveUserRequest> =
  s.object<WorkspacesRemoveUserRequest>(
    {
      data: s.optional(s.lazy(() => workspaceRemoveUserRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
