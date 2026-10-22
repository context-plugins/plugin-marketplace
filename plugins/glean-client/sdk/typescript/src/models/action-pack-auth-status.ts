import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionAuthTypeSchema, type ActionAuthType } from "./action-auth-type.js";

export type ActionPackAuthStatus = {
  /** Whether the calling user is already authenticated to the tool backing the action pack. */
  authenticated: boolean;
  /**
   * Authentication mechanism used by an action pack.
   *   - `AUTH_USER_OAUTH`: Requires per-user OAuth consent to the third-party tool.
   *   - `AUTH_ADMIN`: Uses a service-account / admin-owned credential. End users do not authorize
   *     individually.
   *   - `AUTH_NONE`: Action pack requires no authentication.
   */
  authType: ActionAuthType;
};

export const actionPackAuthStatusSchema: Schema<ActionPackAuthStatus> = s.object<ActionPackAuthStatus>({
  authenticated: s.boolean(),
  authType: actionAuthTypeSchema,
});
