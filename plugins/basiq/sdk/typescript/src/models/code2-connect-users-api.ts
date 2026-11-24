import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code, expressed as a string value. */
export const Code2ConnectUsersApi = {
  ForbiddenAccess: "forbidden-access",
  NoProductionAccess: "no-production-access",
  AccessDenied: "access-denied",
} as const;
export type Code2ConnectUsersApi =
  | (typeof Code2ConnectUsersApi)[keyof typeof Code2ConnectUsersApi]
  | (string & {});

export const code2ConnectUsersApiSchema: EnumSchema<Code2ConnectUsersApi> =
  s.enumOf<Code2ConnectUsersApi>(Code2ConnectUsersApi);
