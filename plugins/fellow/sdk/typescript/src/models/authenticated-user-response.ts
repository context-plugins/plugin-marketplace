import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userInfoSchema, type UserInfo } from "./user-info.js";
import { workspaceInfoSchema, type WorkspaceInfo } from "./workspace-info.js";

/** Response for the /me endpoint. */
export type AuthenticatedUserResponse = {
  /** User information in API responses. */
  user: UserInfo;
  /** Workspace information in API responses. */
  workspace: WorkspaceInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authenticatedUserResponseSchema: Schema<AuthenticatedUserResponse> =
  s.object<AuthenticatedUserResponse>(
    {
      user: userInfoSchema,
      workspace: workspaceInfoSchema,
    },
    { additionalProperties: s.json() },
  );
