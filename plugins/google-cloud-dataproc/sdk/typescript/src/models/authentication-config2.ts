import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  userWorkloadAuthenticationTypeSchema,
  type UserWorkloadAuthenticationType,
} from "./user-workload-authentication-type.js";

/**
 * Optional. Authentication configuration used to set the default identity for the workload
 * execution. The config specifies the type of identity (service account or user) that will be used
 * by workloads to access resources on the project(s).
 */
export type AuthenticationConfig2 = {
  /** Optional. Authentication type for the user workload running in containers. */
  userWorkloadAuthenticationType?: UserWorkloadAuthenticationType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authenticationConfig2Schema: Schema<AuthenticationConfig2> = s.object<AuthenticationConfig2>(
  {
    userWorkloadAuthenticationType: s.optional(s.lazy(() => userWorkloadAuthenticationTypeSchema)),
  },
  { additionalProperties: s.json() },
);
