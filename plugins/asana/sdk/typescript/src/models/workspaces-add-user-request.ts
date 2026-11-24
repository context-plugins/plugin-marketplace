import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceAddUserRequestSchema, type WorkspaceAddUserRequest } from "./workspace-add-user-request.js";

export type WorkspacesAddUserRequest = {
  /** A user identification object for specification with the addUser/removeUser endpoints. */
  data?: WorkspaceAddUserRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesAddUserRequestSchema: Schema<WorkspacesAddUserRequest> =
  s.object<WorkspacesAddUserRequest>(
    {
      data: s.optional(s.lazy(() => workspaceAddUserRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
