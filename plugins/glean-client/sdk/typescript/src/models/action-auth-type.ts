import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Authentication mechanism used by an action pack.
 *   - `AUTH_USER_OAUTH`: Requires per-user OAuth consent to the third-party tool.
 *   - `AUTH_ADMIN`: Uses a service-account / admin-owned credential. End users do not authorize
 *     individually.
 *   - `AUTH_NONE`: Action pack requires no authentication.
 */
export const ActionAuthType = {
  AuthUserOauth: "AUTH_USER_OAUTH",
  AuthAdmin: "AUTH_ADMIN",
  AuthNone: "AUTH_NONE",
} as const;
export type ActionAuthType = (typeof ActionAuthType)[keyof typeof ActionAuthType] | (string & {});

export const actionAuthTypeSchema: EnumSchema<ActionAuthType> = s.enumOf<ActionAuthType>(ActionAuthType);
