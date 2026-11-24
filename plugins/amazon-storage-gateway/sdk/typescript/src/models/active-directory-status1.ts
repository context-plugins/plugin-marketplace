import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the status of the gateway as a member of the Active Directory domain. This field is
 * only used as part of a JoinDomain request. It is not affected by Active Directory connectivity
 * changes that occur after the JoinDomain request succeeds. ACCESS_DENIED: Indicates that the
 * JoinDomain operation failed due to an authentication error. DETACHED: Indicates that gateway is
 * not joined to a domain. JOINED: Indicates that the gateway has successfully joined a domain.
 * JOINING: Indicates that a JoinDomain operation is in progress. INSUFFICIENT_PERMISSIONS:
 * Indicates that the JoinDomain operation f
 */
export const ActiveDirectoryStatus1 = {
  AccessDenied: "ACCESS_DENIED",
  Detached: "DETACHED",
  Joined: "JOINED",
  Joining: "JOINING",
  NetworkError: "NETWORK_ERROR",
  Timeout: "TIMEOUT",
  UnknownError: "UNKNOWN_ERROR",
  InsufficientPermissions: "INSUFFICIENT_PERMISSIONS",
} as const;
export type ActiveDirectoryStatus1 =
  | (typeof ActiveDirectoryStatus1)[keyof typeof ActiveDirectoryStatus1]
  | (string & {});

export const activeDirectoryStatus1Schema: EnumSchema<ActiveDirectoryStatus1> =
  s.enumOf<ActiveDirectoryStatus1>(ActiveDirectoryStatus1);
