import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Authorization type identifier user AuthorizationUser AuthorizationUser "User" authorization type
 * identifier token AuthorizationToken AuthorizationToken "Token" authorization type identifier
 * other AuthorizationOther AuthorizationOther "Other" authorization type identifier user-mfa
 * AuthorizationUserMfa AuthorizationUserMfa "UserMfa" authorization type identifier
 * user-mfa-intermittent AuthorizationUserMfaIntermittent AuthorizationUserMfaIntermittent
 * "UserMfaIntermittent" authorization type identifier
 */
export const Type1 = {
  User: "user",
  Token: "token",
  Other: "other",
  UserMfa: "user-mfa",
  UserMfaIntermittent: "user-mfa-intermittent",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
