import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The per-user authorization status for a datasource. */
export const AuthStatus = {
  Disabled: "DISABLED",
  AwaitingAuth: "AWAITING_AUTH",
  Authorized: "AUTHORIZED",
  StaleOauth: "STALE_OAUTH",
  SegMigration: "SEG_MIGRATION",
} as const;
export type AuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus] | (string & {});

export const authStatusSchema: EnumSchema<AuthStatus> = s.enumOf<AuthStatus>(AuthStatus);
