import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionAuthTypeSchema, type ActionAuthType } from "./action-auth-type.js";
import { toolServerAuthStatusSchema, type ToolServerAuthStatus } from "./tool-server-auth-status.js";

export type ToolServerAuthStatusResponse = {
  /** Human-readable name of the tool server. */
  displayName?: string;
  /** Logo URL for the tool server. */
  logoUrl?: string;
  /** Brief description of the tool server. */
  description?: string;
  /** Authentication status for the calling user. */
  authStatus: ToolServerAuthStatus;
  /**
   * Authentication mechanism used by an action pack.
   *   - `AUTH_USER_OAUTH`: Requires per-user OAuth consent to the third-party tool.
   *   - `AUTH_ADMIN`: Uses a service-account / admin-owned credential. End users do not authorize
   *     individually.
   *   - `AUTH_NONE`: Action pack requires no authentication.
   */
  authType: ActionAuthType;
};

export const toolServerAuthStatusResponseSchema: Schema<ToolServerAuthStatusResponse> =
  s.object<ToolServerAuthStatusResponse>({
    displayName: s.optional(s.string()),
    logoUrl: s.optional(s.string()),
    description: s.optional(s.string()),
    authStatus: toolServerAuthStatusSchema,
    authType: actionAuthTypeSchema,
  });
