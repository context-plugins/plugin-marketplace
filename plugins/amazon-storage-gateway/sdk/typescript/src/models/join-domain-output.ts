import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeDirectoryStatus1Schema, type ActiveDirectoryStatus1 } from "./active-directory-status1.js";

export type JoinDomainOutput = {
  /** The unique Amazon Resource Name (ARN) of the gateway that joined the domain. */
  gatewayArn?: string;
  /**
   * Indicates the status of the gateway as a member of the Active Directory domain. This field is
   * only used as part of a JoinDomain request. It is not affected by Active Directory connectivity
   * changes that occur after the JoinDomain request succeeds. ACCESS_DENIED: Indicates that the
   * JoinDomain operation failed due to an authentication error. DETACHED: Indicates that gateway is
   * not joined to a domain. JOINED: Indicates that the gateway has successfully joined a domain.
   * JOINING: Indicates that a JoinDomain operation is in progress. INSUFFICIENT_PERMISSIONS:
   * Indicates that the JoinDomain operation f
   */
  activeDirectoryStatus?: ActiveDirectoryStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const joinDomainOutputSchema: Schema<JoinDomainOutput> = s.object<JoinDomainOutput>(
  {
    gatewayArn: s.optional(s.string()),
    activeDirectoryStatus: s.optional(s.lazy(() => activeDirectoryStatus1Schema)),
    _keysMap: {
      gatewayArn: "GatewayARN",
      activeDirectoryStatus: "ActiveDirectoryStatus",
    },
  },
  { additionalProperties: s.json() },
);
