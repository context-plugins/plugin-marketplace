import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Authentication type for the user workload running in containers. */
export const UserWorkloadAuthenticationType = {
  AuthenticationTypeUnspecified: "AUTHENTICATION_TYPE_UNSPECIFIED",
  ServiceAccount: "SERVICE_ACCOUNT",
  EndUserCredentials: "END_USER_CREDENTIALS",
} as const;
export type UserWorkloadAuthenticationType =
  | (typeof UserWorkloadAuthenticationType)[keyof typeof UserWorkloadAuthenticationType]
  | (string & {});

export const userWorkloadAuthenticationTypeSchema: EnumSchema<UserWorkloadAuthenticationType> =
  s.enumOf<UserWorkloadAuthenticationType>(UserWorkloadAuthenticationType);
